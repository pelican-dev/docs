import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "references/application/pelican",
    },
    {
      type: "category",
      label: "Allocation",
      items: [
        {
          type: "doc",
          id: "references/application/application-allocations",
          label: "List allocations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/allocation-store",
          label: "Create allocation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-allocations-view",
          label: "Delete allocation",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Database",
      items: [
        {
          type: "doc",
          id: "references/application/application-servers-databases",
          label: "List databases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/database-store",
          label: "Create database",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-servers-databases-view",
          label: "View database",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/database-delete",
          label: "Delete database",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/application/database-reset-password",
          label: "Reset password",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "DatabaseHost",
      items: [
        {
          type: "doc",
          id: "references/application/application-databasehosts",
          label: "List database hosts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/database-host-store",
          label: "Create database host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-databasehosts-view",
          label: "View database host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/database-host-update",
          label: "Update database host",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/database-host-delete",
          label: "Delete database host",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Egg",
      items: [
        {
          type: "doc",
          id: "references/application/application-eggs-eggs",
          label: "List eggs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/application-eggs-eggs-view",
          label: "View egg",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ExternalServer",
      items: [
        {
          type: "doc",
          id: "references/application/application-servers-external",
          label: "View server (external id)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ExternalUser",
      items: [
        {
          type: "doc",
          id: "references/application/application-users-external",
          label: "View user (external id)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Mount",
      items: [
        {
          type: "doc",
          id: "references/application/application-mounts",
          label: "List mounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/mount-store",
          label: "Create mount",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-mounts-view",
          label: "View mount",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/mount-update",
          label: "Update mount",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/mount-delete",
          label: "Delete mount",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/application/application-mounts-eggs",
          label: "Assign eggs to mount",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-mounts-nodes",
          label: "Assign mounts to mount",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/mount-delete-egg",
          label: "Unassign egg from mount",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/application/mount-delete-node",
          label: "Unassign node from mount",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Node",
      items: [
        {
          type: "doc",
          id: "references/application/application-nodes",
          label: "List nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/node-store",
          label: "Create node",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-nodes-view",
          label: "View node",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/node-update",
          label: "Update node",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/node-delete",
          label: "Delete node",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "NodeConfiguration",
      items: [
        {
          type: "doc",
          id: "references/application/nodes-node-configuration",
          label: "Get node configuration",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "NodeDeployment",
      items: [
        {
          type: "doc",
          id: "references/application/nodes-node-deployment",
          label: "Get deployable nodes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Role",
      items: [
        {
          type: "doc",
          id: "references/application/application-roles",
          label: "List roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/role-store",
          label: "Create role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-roles-view",
          label: "View role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/role-update",
          label: "Update role",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/role-delete",
          label: "Delete role",
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
          id: "references/application/application-servers",
          label: "List servers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/server-store",
          label: "Create server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-servers-view",
          label: "View server",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/application-servers-server-delete-1",
          label: "Delete server",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/application/application-servers-server-delete-0",
          label: "Delete server",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "ServerDetails",
      items: [
        {
          type: "doc",
          id: "references/application/application-servers-details",
          label: "Update details",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/application-servers-build",
          label: "Update build",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "ServerManagement",
      items: [
        {
          type: "doc",
          id: "references/application/application-servers-suspend",
          label: "Suspsend",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-servers-unsuspend",
          label: "Unsuspsend",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-servers-reinstall",
          label: "Reinstall",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-servers-transfer",
          label: "Start transfer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-servers-transfer-cancel",
          label: "Cancel transfer",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Startup",
      items: [
        {
          type: "doc",
          id: "references/application/application-servers-startup",
          label: "Update startup",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "User",
      items: [
        {
          type: "doc",
          id: "references/application/application-users",
          label: "List users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/user-store",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/application/application-users-view",
          label: "View user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "references/application/user-update",
          label: "Update user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/user-delete",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "references/application/user-assign-roles",
          label: "Assign role to user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "references/application/user-remove-roles",
          label: "Unassign role from user",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
