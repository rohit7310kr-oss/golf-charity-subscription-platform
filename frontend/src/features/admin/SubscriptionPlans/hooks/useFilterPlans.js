import { useState } from "react";

const useFilterPlans = function (plans) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredPlans = plans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.planId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || plan.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return {
    filteredPlans,
    setSearchTerm,
    setFilterStatus,
    searchTerm,
    filterStatus,
  };
};

export default useFilterPlans;
