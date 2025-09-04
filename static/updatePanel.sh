#!/bin/bash

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root or with sudo." >&2
   exit 1
fi

function exitInstall {
  cd "$install_dir"
  php artisan up
  echo "Panel is out of maintenance mode."
  exit $1
}

read -p "Enter the directory for the panel location [/var/www/pelican]: " install_dir
install_dir=${install_dir:-/var/www/pelican}

if [ ! -d "$install_dir" ]; then
  echo "Directory $install_dir does not exist. Exiting..."
  exit 1
fi

env_file="$install_dir/.env"

if [ ! -f "$env_file" ]; then
  echo "File $env_file does not exist. Exiting..."
  exit 1
fi

owner=$(stat -c '%U' "$install_dir" || echo "www-data")
read -p "Enter the owner of the files (www-data, apache, nginx) [$owner]: " owner
owner=${owner:-www-data}

group=$(stat -c '%G' "$install_dir" || echo "www-data")
read -p "Enter the group of the files (www-data, apache, nginx) [$group]: " group
group=${group:-www-data}

cd "$install_dir"
php artisan down
if [ $? -ne 0 ]; then
  echo "Failed to put the panel into maintenance mode."
  exitInstall 1
fi
echo "Panel is now in maintenance mode."

db_connection=$(grep "^DB_CONNECTION=" "$env_file" | cut -d '=' -f 2)

if [ -z "$db_connection" ]; then
  echo "DB_CONNECTION not found in $env_file."
  exitInstall 0
fi

echo "DB_CONNECTION is set to: $db_connection"

read -p "Do you want to create a backup? (y/n) [y]: " backup_confirm
backup_confirm=${backup_confirm:-y}
if [ "$backup_confirm" != "y" ]; then
  echo "Backup canceled."
  exitInstall 0
fi

backup_dir="$install_dir/backup"
mkdir -p "$backup_dir/storage/app"

cp -a "$env_file" "$backup_dir/.env.backup"
if [ $? -ne 0 ]; then
  echo "Failed to backup .env file, aborting"
  exitInstall 1
fi
echo "Backed up .env file successfully."

cp -a "$install_dir/storage/app/public" "$backup_dir/storage/app/"
if [ $? -ne 0 ]; then
  echo "Failed to backup avatars & fonts files, aborting"
  exitInstall 1
fi

if [ "$db_connection" = "sqlite" ]; then
  db_database=$(grep "^DB_DATABASE=" "$env_file" | cut -d '=' -f 2)

  if [ -z "$db_database" ]; then
    echo "DB_DATABASE not found in $env_file."
    exitInstall 1
  fi

  if [[ "$db_database" != *.sqlite ]]; then
    db_database="$db_database.sqlite"
  fi
  echo "DB_DATABASE is set to: $db_database"
  cp -a "$install_dir/database/$db_database" "$backup_dir/$db_database.backup"
  if [ $? -ne 0 ]; then
    echo "Failed to backup $db_database file, aborting"
    exitInstall 1
  fi
else
  read -p "NOTE: THIS WILL NOT BACKUP MySQL/MariaDB DATABASES!!! You should pause now and make your own backup!! You've been warned! Continue? (y/n) [y]: " database_confirm
  database_confirm=${database_confirm:-y}
  if [ "$database_confirm" != "y" ]; then
    echo "Update Canceled."
    exitInstall 0
  fi
fi

echo "Downloading Files..."
curl -L https://github.com/pelican-dev/panel/releases/latest/download/panel.tar.gz -o panel.tar.gz
expected_checksum=$(curl -L https://github.com/pelican-dev/panel/releases/latest/download/checksum.txt | awk '{ print $1 }')
calculated_checksum=$(sha256sum panel.tar.gz | awk '{ print $1 }')

if [[ -z "$expected_checksum" || -z "$calculated_checksum" || "$expected_checksum" != "$calculated_checksum" ]]; then
  read -p "NOTE: Checksum mismatch, the file may be corrupted!!! You've been warned! Continue? (y/n) [y]: " checksum_confirm
  checksum_confirm=${checksum_confirm:-y}
  if [ "$checksum_confirm" != "y" ]; then
    echo "Update Canceled."
    exitInstall 1
  fi
fi

echo "Checksum verified."
read -p "Do you want to delete all files and folders in $install_dir except the backup folder? (y/n) [y]: " delete_confirm
delete_confirm=${delete_confirm:-y}
if [ "$delete_confirm" != "y" ]; then
  echo "Deletion canceled."
  exitInstall 0
fi

find "$install_dir" -mindepth 1 -maxdepth 1 ! -name 'backup' ! -name 'panel.tar.gz' ! -name 'artisan' -exec rm -rf {} +
if [ $? -ne 0 ]; then
  echo "Failed to delete old files, aborting"
  exitInstall 1
fi
echo "Deleted all files and folders in $install_dir except the backup folder."

echo "Extracting tarball."
tar -xzf panel.tar.gz -C "$install_dir"
if [ $? -ne 0 ]; then
  echo "Failed to extract tarball, aborting"
  exitInstall 1
fi
rm panel.tar.gz
if [ $? -ne 0 ]; then
  echo "Failed to delete leftover tarball, continuing."
fi

echo "Installing Composer"
COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader --no-interaction
if [ $? -ne 0 ]; then
  echo "Failed to run composer, aborting"
  exitInstall 1
fi

php artisan down
if [ $? -ne 0 ]; then
  echo "Failed to put the panel into maintenance mode."
  exitInstall 1
fi

echo "Restoring .env"
cp -a "$backup_dir/.env.backup" "$install_dir/.env"
if [ $? -ne 0 ]; then
  echo "Failed to restore the .env file, aborting"
  exitInstall 1
fi

echo "Restoring avatars & fonts"
cp -a "$backup_dir/storage/app/public" "$install_dir/storage/app/"
if [ $? -ne 0 ]; then
  echo "Failed to restore avatars & fonts files, aborting"
  exitInstall 1
fi

if [ "$db_connection" = "sqlite" ]; then
  echo "Restoring sqlite database"
  cp -a "$backup_dir/$db_database.backup" "$install_dir/database/$db_database"
  if [ $? -ne 0 ]; then
    echo "Failed to restore the database, aborting"
    exitInstall 1
  fi
fi

echo "Optimizing"
php artisan optimize:clear
php artisan filament:optimize

echo "Creating storage symlinks"
php artisan storage:link

echo "Updating database"
php artisan migrate --seed --force

echo "Setting Permissions"
chmod_command="chmod -R 755 storage/* bootstrap/cache"
eval $chmod_command
if [ $? -ne 0 ]; then
  echo "Failed to run chmod, Please run the following commands manually:"
  echo "sudo $chmod_command"
fi
chown_command="chown -R $owner:$group $install_dir"
eval $chown_command
if [ $? -ne 0 ]; then
  echo "Failed to run chown, Please run the following commands manually:"
  echo "sudo $chown_command"
fi

php artisan queue:restart
php artisan up

echo "Panel is now live and out of maintenance mode."
echo "Panel Updated!"
exit 0
