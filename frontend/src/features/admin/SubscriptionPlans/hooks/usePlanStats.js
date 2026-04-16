const usePlanStats = function (plans) {
  const totalPlans = plans.length;
  const activePlans = plans.filter((p) => p.status === "active").length;
  const totalSubscribers = plans.reduce(
    (sum, plan) => sum + plan.subscribers,
    0,
  );
  const averageCharityShare = (
    plans.reduce((sum, plan) => sum + plan.charityShare, 0) / totalPlans
  ).toFixed(1);

  return {
    totalPlans,
    activePlans,
    totalSubscribers,
    averageCharityShare,
  };
};

export default usePlanStats;
