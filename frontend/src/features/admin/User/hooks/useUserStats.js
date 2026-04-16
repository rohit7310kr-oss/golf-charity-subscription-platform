const useUserStats = function (users) {
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;

  const newUsersThisMonth = users.filter((u) =>
    u.joinDate.startsWith("2024-04"),
  ).length;

  const adminUsers = users.filter((u) => u.role === "admin").length;

  return { totalUsers, activeUsers, newUsersThisMonth, adminUsers };
};

export default useUserStats;
