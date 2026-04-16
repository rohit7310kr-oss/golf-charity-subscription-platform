import { useState } from "react";
import AdminOutletPage from "../../shared/AdminOutletPage";
import AdminPageHeader from "../../shared/AdminPageHeader";
import AdminPageTable from "../../shared/AdminPageTable";
import AdminStatsCardsSection from "../../shared/AdminStatsCardsSection";
import AdminFilterSection from "../../shared/AdminFilterSection";
import AdminBulkActionSection from "../../shared/AdminBulkActionSection";
import { allPayments } from "../data/payments";
import useFilterPayments from "../hooks/useFilterPayments";
import useSelectRow from "../../hooks/useSelectRow";
import usePaymentStats from "../hooks/usePaymentStats";

const AdminPayments = () => {
  const [payments] = useState(allPayments);

  const {
    filteredPayments,
    setSearchTerm,
    setFilterStatus,
    searchTerm,
    filterStatus,
  } = useFilterPayments(payments);

  const {
    handleRowSelect: handlePaymentSelect,
    handleSelectAll,
    selectedRow: selectedPayments,
  } = useSelectRow(filteredPayments);

  const { totalPayments, completedPayments, totalRevenue, pendingAmount } =
    usePaymentStats(payments);

  const handleDeletePayment = (paymentId) => {
    console.log(`Deleting payment ${paymentId}`);
  };

  const handleRefundPayment = (paymentId) => {
    console.log(`Processing refund for payment ${paymentId}`);
  };

  return (
    <AdminOutletPage>
      <AdminPageHeader
        title="Payments Management"
        description="Manage payment transactions and revenue"
        actions={[
          {
            title: "📊 Export Payments",
            onClick: () => {},
            type: "secondary",
          },
          {
            title: "📈 View Reports",
            onClick: () => {},
            type: "secondary",
          },
        ]}
      />

      <AdminStatsCardsSection
        data={[
          {
            title: "Total Payments",
            value: totalPayments,
            extras: `${completedPayments} completed`,
            icon: "💳",
          },
          {
            title: "Total Revenue",
            value: `$${totalRevenue}`,
            extras: "From completed payments",
            icon: "💰",
          },
          {
            title: "Pending Amount",
            value: `$${pendingAmount}`,
            extras: "Awaiting processing",
            icon: "⏳",
          },
          {
            title: "Success Rate",
            value: `${((completedPayments / totalPayments) * 100).toFixed(1)}%`,
            extras: "Payment completion rate",
            icon: "✅",
          },
        ]}
      />

      <AdminFilterSection
        filters={[
          {
            type: "text",
            title: "Search by user name, email, ID, or plan...",
            value: searchTerm,
            valueSetter: setSearchTerm,
          },
          {
            type: "select",
            options: [
              { value: "all", label: "All Statuses" },
              { value: "completed", label: "Completed" },
              { value: "pending", label: "Pending" },
              { value: "failed", label: "Failed" },
              { value: "refunded", label: "Refunded" },
            ],
            value: filterStatus,
            valueSetter: setFilterStatus,
          },
        ]}
      />

      <AdminBulkActionSection data={selectedPayments} />

      <AdminPageTable
        title={`Payments ${filteredPayments.length}`}
        rowKey="paymentId"
        columns={[
          {
            type: "checkbox",
            checked:
              selectedPayments.length === filteredPayments.length &&
              filteredPayments.length > 0,
            onChange: handleSelectAll,
          },
          { type: "text", label: "Payment ID", key: "paymentId" },
          { type: "text", label: "User Name", key: "userName" },
          { type: "text", label: "Email", key: "email" },
          { type: "text", label: "Plan", key: "planName" },
          { type: "text", label: "Amount", key: "amount" },
          { type: "text", label: "Method", key: "paymentMethod" },
          { type: "text", label: "Status", key: "status" },
          { type: "date", label: "Payment Date", key: "paymentDate" },
          { type: "text", label: "Charity Share", key: "charityShare" },
          {
            type: "actions",
            label: "Actions",
            key: "action",
            actions: [
              { label: "view", type: "edit", onClick: () => {} },
              {
                label: "refund",
                type: "delete",
                onClick: handleRefundPayment,
              },
            ],
          },
        ]}
        rows={filteredPayments}
        selectedRow={selectedPayments}
        handleRowSelect={handlePaymentSelect}
      />
    </AdminOutletPage>
  );
};

export default AdminPayments;
