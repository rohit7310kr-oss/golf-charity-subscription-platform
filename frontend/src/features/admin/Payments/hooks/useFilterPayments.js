import { useState } from "react";

const useFilterPayments = function (payments) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.paymentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.planName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || payment.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return {
    filteredPayments,
    setSearchTerm,
    setFilterStatus,
    searchTerm,
    filterStatus,
  };
};

export default useFilterPayments;
