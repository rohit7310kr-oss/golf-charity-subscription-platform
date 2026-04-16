import { useState } from "react";
import AdminOutletPage from "../../shared/AdminOutletPage";
import AdminPageHeader from "../../shared/AdminPageHeader";
import AdminPageTable from "../../shared/AdminPageTable";
import AdminStatsCardsSection from "../../shared/AdminStatsCardsSection";
import AdminFilterSection from "../../shared/AdminFilterSection";
import AdminBulkActionSection from "../../shared/AdminBulkActionSection";
import { allPlans } from "../data/plans";
import useFilterPlans from "../hooks/useFilterPlans";
import useSelectRow from "../../hooks/useSelectRow";
import usePlanStats from "../hooks/usePlanStats";

const AdminSubscriptionPlans = () => {
  const [plans] = useState(allPlans);

  const {
    filteredPlans,
    setSearchTerm,
    setFilterStatus,
    searchTerm,
    filterStatus,
  } = useFilterPlans(plans);

  const {
    handleRowSelect: handlePlanSelect,
    handleSelectAll,
    selectedRow: selectedPlans,
  } = useSelectRow(filteredPlans);

  const { totalPlans, activePlans, totalSubscribers, averageCharityShare } =
    usePlanStats(plans);

  const handleDeletePlan = (planId) => {
    console.log(`Deleting plan ${planId}`);
  };

  const handleStatusToggle = (planId) => {
    console.log(`Toggling status for plan ${planId}`);
  };

  return (
    <AdminOutletPage>
      <AdminPageHeader
        title="Subscription Plans Management"
        description="Manage subscription plans and charity distribution shares"
        actions={[
          { title: "➕ Add New Plan", onClick: () => {}, type: "primary" },
          { title: "📊 View Analytics", onClick: () => {}, type: "secondary" },
        ]}
      />

      <AdminStatsCardsSection
        data={[
          {
            title: "Total Plans",
            value: totalPlans,
            extras: `${activePlans} active`,
            icon: "📋",
          },
          {
            title: "Total Subscribers",
            value: totalSubscribers.toLocaleString(),
            extras: "Across all plans",
            icon: "👥",
          },
          {
            title: "Avg Charity Share",
            value: `${averageCharityShare}%`,
            extras: "Per plan",
            icon: "🤝",
          },
          {
            title: "Top Plan",
            value: plans.reduce((top, plan) =>
              plan.subscribers > top.subscribers ? plan : top,
            ).name,
            extras: `${
              plans.reduce((top, plan) =>
                plan.subscribers > top.subscribers ? plan : top,
              ).subscribers
            } subscribers`,
            icon: "⭐",
          },
        ]}
      />

      <AdminFilterSection
        filters={[
          {
            type: "text",
            title: "Search plans by name, ID, or description...",
            value: searchTerm,
            valueSetter: setSearchTerm,
          },
          {
            type: "select",
            options: [
              { value: "all", label: "All Plans" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ],
            value: filterStatus,
            valueSetter: setFilterStatus,
          },
        ]}
      />

      <AdminBulkActionSection data={selectedPlans} />

      <AdminPageTable
        title={`Subscription Plans ${filteredPlans.length}`}
        rowKey="planId"
        columns={[
          {
            type: "checkbox",
            checked:
              selectedPlans.length === filteredPlans.length &&
              filteredPlans.length > 0,
            onChange: handleSelectAll,
          },
          { type: "text", label: "Plan ID", key: "planId" },
          { type: "text", label: "Name", key: "name" },
          { type: "text", label: "Price", key: "price" },
          { type: "text", label: "Billing Cycle", key: "billingCycle" },
          { type: "text", label: "Subscribers", key: "subscribers" },
          {
            type: "text",
            label: "Charity Share",
            key: "charityShare",
          },
          { type: "text", label: "Status", key: "status" },
          { type: "date", label: "Created Date", key: "createdDate" },
          { type: "date", label: "Last Modified", key: "lastModified" },
          {
            type: "actions",
            label: "Actions",
            key: "action",
            actions: [
              { label: "edit", type: "edit", onClick: () => {} },
              { label: "delete", type: "delete", onClick: handleDeletePlan },
            ],
          },
        ]}
        rows={filteredPlans}
        selectedRow={selectedPlans}
        handleRowSelect={handlePlanSelect}
      />
    </AdminOutletPage>
  );
};

export default AdminSubscriptionPlans;
