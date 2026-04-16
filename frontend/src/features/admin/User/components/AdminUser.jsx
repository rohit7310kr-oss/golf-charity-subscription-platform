import React, { useState } from "react";
import AdminStatsCardsSection from "../../shared/AdminStatsCardsSection";
import useFilterTable from "../hooks/useFilterTable";
import useSelectRow from "../../hooks/useSelectRow";
import AdminPageHeader from "../../shared/AdminPageHeader";
import AdminFilterSection from "../../shared/AdminFilterSection";
import AdminBulkActionSection from "../../shared/AdminBulkActionSection";
import { allUsers } from "../data/users";
import AdminPageTable from "../../shared/AdminPageTable";
import useUserStats from "../hooks/useUserStats";
import AdminOutletPage from "../../shared/AdminOutletPage";

const AdminUser = () => {
  // Mock user data - in real app this would come from API

  const [users] = useState(allUsers);

  const {
    filteredUsers,
    setSearchTerm,
    setFilterRole,
    searchTerm,
    filterRole,
  } = useFilterTable(users);

  const {
    handleRowSelect: handleUserSelect,
    handleSelectAll,
    selectedRow: selectedUsers,
  } = useSelectRow(filteredUsers);

  const { totalUsers, activeUsers, newUsersThisMonth, adminUsers } =
    useUserStats(users);

  const handleRoleChange = (userId, newRole) => {
    // In real app, this would make an API call
    console.log(`Changing role for user ${userId} to ${newRole}`);
  };

  const handleStatusToggle = (userId) => {
    // In real app, this would make an API call
    console.log(`Toggling status for user ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    // In real app, this would make an API call
    console.log(`Deleting user ${userId}`);
  };

  return (
    <AdminOutletPage>
      {/* Header Section */}
      <AdminPageHeader
        title="User Management"
        description="Manange user accounts, roles, and permissions"
        actions={[
          { title: "➕ Add New User", onClick: () => {}, type: "primary" },
          { title: "📤 Export Users", onClick: () => {}, type: "secondary" },
        ]}
      />

      {/* Stats Cards */}
      <AdminStatsCardsSection
        data={[
          {
            title: "total users",
            value: totalUsers,
            extras: `${+{ newUsersThisMonth }} this month`,
            icon: "👥",
          },
          {
            title: "Active Users",
            value: activeUsers,
            extras: `${Math.round((activeUsers / totalUsers) * 100)}% active`,
            icon: "✅",
          },
          {
            title: "New This Month",
            value: newUsersThisMonth,
            extras: `+12.5%`,
            icon: "🆕",
          },
          {
            title: "Admin Users",
            value: adminUsers,
            extras: `System admins`,
            icon: "👑",
          },
        ]}
      />

      <AdminFilterSection
        filters={[
          {
            type: "text",
            title: "Search users by name, email, or ID...",
            value: searchTerm,
            valueSetter: setSearchTerm,
          },
          {
            type: "select",
            options: [
              { value: "all", label: "all" },
              { value: "user", label: "user" },
              { value: "admin", label: "admin" },
            ],
            value: filterRole,
            valueSetter: setFilterRole,
          },
        ]}
      />

      {/* will configure this latter */}
      <AdminBulkActionSection data={selectedUsers} />

      {/* Users Table */}
      <AdminPageTable
        title={`Users ${filteredUsers.length}`}
        columns={[
          {
            type: "checkbox",
            checked:
              selectedUsers.length === filteredUsers.length &&
              filteredUsers.length > 0,
            onChange: handleSelectAll,
          },
          { type: "text", label: "User Id", key: "publicId" },
          { type: "text", label: "Name", key: "fullName" },
          { type: "text", label: "Email", key: "email" },
          {
            type: "select",
            label: "Role",
            key: "role",
            options: [
              { value: "admin", label: "Admin" },
              { value: "user", label: "user" },
            ],
          },
          { type: "text", label: "Status", key: "status" },
          { type: "date", label: "Join Date", key: "joinDate" },
          { type: "date", label: "Last login", key: "lastLogin" },
          {
            type: "actions",
            label: "Actions",
            key: "action",
            actions: [
              { label: "edit", type: "edit", onClick: () => {} },
              { label: "delete", type: "delete", onClick: () => {} },
            ],
          },
        ]}
        rows={filteredUsers}
        selectedRow={selectedUsers}
        handleRowSelect={handleUserSelect}
        handleRoleChange={handleRoleChange}
      />
    </AdminOutletPage>
  );
};

export default AdminUser;
