import { useState } from "react";

const useFilterTable = function (users) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const filteredUsers = users.filter((row) => {
    const matchesSearch =
      row.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.publicId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === "all" || row.role === filterRole;

    return matchesSearch && matchesRole;
  });

  return {
    filteredUsers,
    setSearchTerm,
    setFilterRole,
    searchTerm,
    filterRole,
  };
};

export default useFilterTable;
