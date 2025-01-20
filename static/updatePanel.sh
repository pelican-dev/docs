#!/bin/sh

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root or with sudo." >&2
   exit 1
fi

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

cd "$install_dir"
php artisan down
if [ $? -ne 0 ]; then
  echo "Failed to put the panel into maintenance mode."
  exit 1
fi
echo "Panel is now in maintenance mode."

db_connection=$(grep "^DB_CONNECTION=" "$env_file" | cut -d '=' -f 2)

if [ -z "$db_connection" ]; then
  echo "DB_CONNECTION not found in $env_file."
  exit 0
else
  echo "DB_CONNECTION is set to: $db_connection"

  read -p "Do you want to create a backup? (y/n) [y]: " backup_confirm
  backup_confirm=${backup_confirm:-y}
  if [ "$backup_confirm" != "y" ]; then
    echo "Backup canceled."
    php artisan up
    echo "Panel is out of maintenance mode."
    exit 0
  fi

  backup_dir="$install_dir/backup"
  mkdir -p "$backup_dir"

  if [ "$db_connection" = "sqlite" ]; then
    db_database=$(grep "^DB_DATABASE=" "$env_file" | cut -d '=' -f 2)

    if [ -z "$db_database" ]; then
      echo "DB_DATABASE not found in $env_file."
      php artisan up
      echo "Panel is out of maintenance mode."
      exit 1
    else
      echo "DB_DATABASE is set to: $db_database"
      cp "$install_dir/database/$db_database" "$backup_dir/$db_database.backup"
    fi
  else
    read -p "NOTE: THIS WILL NOT BACKUP MySQL/MariaDB DATABASES!!! You should pause now and make your own backup!! You've been warned! Continue? (y/n) [y]: " continue_confirm
continue_confirm=${continue_confirm:-y}
    if [ "$continue_confirm" != "y" ]; then
      echo "Update Canceled."
      php artisan up
      echo "Panel is out of maintenance mode."
      exit 0
    fi
  fi

  cp "$env_file" "$backup_dir/.env.backup"
  echo "Backup completed successfully."
fi

read -p "Do you want to delete all files and folders in $install_dir except the backup folder? (y/n) [y]: " delete_confirm
delete_confirm=${delete_confirm:-y}
if [ "$delete_confirm" != "y" ]; then
  echo "Deletion canceled."
  php artisan up
  echo "Panel is out of maintenance mode."
  exit 0
fi

find "$install_dir" -mindepth 1 -maxdepth 1 ! -name 'backup' -exec rm -rf {} +

echo "Deleted all files and folders in $install_dir except the backup folder."

echo "Downloading Files..."
curl -L https://github.com/pelican-dev/panel/releases/latest/download/panel.tar.gz -o panel.tar.gz
expected_checksum=$(curl -L https://github.com/pelican-dev/panel/releases/latest/download/checksum.txt | awk '{ print $1 }')
calculated_checksum=$(sha256sum panel.tar.gz | awk '{ print $1 }')

if [[ -n "$expected_checksum" && -n "$calculated_checksum" && "$expected_checksum" == "$calculated_checksum" ]]; then
  echo "Checksum verified. Proceeding to extract the tarball."
  tar -xzv panel.tar.gz -C "$install_dir"
else
  echo "Checksum mismatch! The file may be corrupted."
  exit 1
fi

echo "Installing Composer"
COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader --no-interaction

php artisan down

echo "Restoring .env"
mv "$backup_dir/.env.backup" "$install_dir/.env"
if [ "$db_connection" = "sqlite" ]; then
  echo "Restoring sqlite database"
  mv "$backup_dir/$db_database.backup" "$install_dir/database/$db_database"
fi

echo "Optimizing"
php artisan optimize:clear
php artisan filament:optimize

echo "Updating database"
php artisan migrate --seed --force

read -p "Enter the owner of the files (www-data, apache, nginx) [www-data]: " file_owner
file_owner=${file_owner:-www-data}

echo "Setting Permissions"
chmod -R 755 storage/* bootstrap/cache
chown -R "$file_owner":"$file_owner" "$install_dir"

php artisan queue:restart
php artisan up

echo "Panel is now live and out of maintenance mode."
echo "Panel Updated!"
exit 0