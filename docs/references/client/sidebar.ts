import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "references/client/pelican",
    },
    {
      type: "category",
      label: "Account",
      items: [
        {
          type: "doc",
          id: "references/client/api-client-account",
          label: "View account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/api-client-account-update-email",
          label: "Update email",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "references/client/api-client-account-update-password",
          label: "Update password",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "ActivityLog",
      items: [
        {
          type: "doc",
          id: "references/client/api-client-account-activity",
          label: "List activity logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/api-client-server-activity",
          label: "List activity logs",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ApiKey",
      items: [
        {
          type: "doc",
          id: "references/client/api-key-index",
          label: "List api keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/api-key-store",
          label: "Create api key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/api-key-delete",
          label: "Delete api key",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Backup",
      items: [
        {
          type: "doc",
          id: "references/client/backup-index",
          label: "List backups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/backup-store",
          label: "Create backup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/backup-view",
          label: "View backup",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/backup-delete",
          label: "Delete backup",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/client/backup-download",
          label: "Download backup",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/backup-toggle-lock",
          label: "Toggle lock",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/backup-restore",
          label: "Restore backup",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Client",
      items: [
        {
          type: "doc",
          id: "references/client/api-client-index",
          label: "List servers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/client-permissions",
          label: "List subuser permissions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Command",
      items: [
        {
          type: "doc",
          id: "references/client/command-index",
          label: "Send command",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Database",
      items: [
        {
          type: "doc",
          id: "references/client/database-index",
          label: "List databases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/database-store",
          label: "Create database",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/database-rotate-password",
          label: "Rotate password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/database-delete",
          label: "Delete database",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "File",
      items: [
        {
          type: "doc",
          id: "references/client/file-directory",
          label: "List files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/file-contents",
          label: "View file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/file-download",
          label: "Download file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/file-rename",
          label: "Rename file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "references/client/file-copy",
          label: "Copy file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-write",
          label: "Write file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-compress",
          label: "Compress files",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-decompress",
          label: "Decompress files",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-delete",
          label: "Delete files/ folders",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-create",
          label: "Create directory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-chmod",
          label: "Update file permissions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/file-pull",
          label: "Pull remote file",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "FileUpload",
      items: [
        {
          type: "doc",
          id: "references/client/servers-file-upload",
          label: "Get upload url",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "NetworkAllocation",
      items: [
        {
          type: "doc",
          id: "references/client/network-allocation-index",
          label: "List allocations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/network-allocation-store",
          label: "Create allocation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/network-allocation-update",
          label: "Update allocation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/network-allocation-delete",
          label: "Delete allocation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/client/network-allocation-set-primary",
          label: "Set primar<",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Power",
      items: [
        {
          type: "doc",
          id: "references/client/power-index",
          label: "Send power action",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ResourceUtilization",
      items: [
        {
          type: "doc",
          id: "references/client/api-client-server-resources",
          label: "View resources",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "SSHKey",
      items: [
        {
          type: "doc",
          id: "references/client/s-sh-key-index",
          label: "List ssh keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/s-sh-key-store",
          label: "Create ssh keys",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/s-sh-key-delete",
          label: "Delete ssh keys",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schedule",
      items: [
        {
          type: "doc",
          id: "references/client/schedule-index",
          label: "List schedules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/schedule-store",
          label: "Create schedule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/schedule-view",
          label: "View schedule",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/schedule-update",
          label: "Update schedule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/schedule-delete",
          label: "Delete schedule",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/client/schedule-execute",
          label: "Run schedule",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ScheduleTask",
      items: [
        {
          type: "doc",
          id: "references/client/schedule-task-store",
          label: "Create task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/schedule-task-update",
          label: "Update task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/schedule-task-delete",
          label: "Delete task",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Server",
      items: [
        {
          type: "doc",
          id: "references/client/api-client-server-view",
          label: "View server",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Settings",
      items: [
        {
          type: "doc",
          id: "references/client/settings-rename",
          label: "Rename",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/settings-reinstall",
          label: "Reinstall",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/settings-docker-image",
          label: "Change docker image",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Startup",
      items: [
        {
          type: "doc",
          id: "references/client/startup-index",
          label: "List startup variables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/startup-update",
          label: "Update startup variable",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Subuser",
      items: [
        {
          type: "doc",
          id: "references/client/subuser-index",
          label: "List subusers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/subuser-store",
          label: "Create subuser",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/subuser-view",
          label: "View subusers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/subuser-update",
          label: "Update subuser",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/subuser-delete",
          label: "Delete subuser",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "TwoFactor",
      items: [
        {
          type: "doc",
          id: "references/client/two-factor-index",
          label: "Setup 2fa",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/client/two-factor-store",
          label: "Enable 2fa",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/client/two-factor-delete",
          label: "Disable 2fa",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Websocket",
      items: [
        {
          type: "doc",
          id: "references/client/api-client-server-ws",
          label: "Get websocket token",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
