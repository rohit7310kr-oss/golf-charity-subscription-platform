const usePaymentStats = function (payments) {
  const totalPayments = payments.length;
  const completedPayments = payments.filter(
    (p) => p.status === "completed",
  ).length;
  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, payment) => sum + payment.amount, 0);
  const pendingAmount = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return {
    totalPayments,
    completedPayments,
    totalRevenue: totalRevenue.toFixed(2),
    pendingAmount: pendingAmount.toFixed(2),
  };
};

export default usePaymentStats;
