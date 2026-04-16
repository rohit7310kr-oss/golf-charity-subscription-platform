import { useMemo, useState } from "react";
import AdminOutletPage from "../../shared/AdminOutletPage";
import AdminPageHeader from "../../shared/AdminPageHeader";
import AdminPageTable from "../../shared/AdminPageTable";
import AdminStatsCardsSection from "../../shared/AdminStatsCardsSection";
import AdminFilterSection from "../../shared/AdminFilterSection";
import AdminBulkActionSection from "../../shared/AdminBulkActionSection";
import charities from "../data/data";
import useSelectRow from "../../hooks/useSelectRow";

const AdminCharities = function () {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = useMemo(
    () => ["all", ...new Set(charities.map((charity) => charity.category))],
    [],
  );

  const filteredCharities = useMemo(
    () =>
      charities.filter((charity) => {
        const matchesSearch =
          charity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          charity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          charity.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          charity.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          filterCategory === "all" || charity.category === filterCategory;

        return matchesSearch && matchesCategory;
      }),
    [searchTerm, filterCategory],
  );

  const {
    handleRowSelect,
    handleSelectAll,
    selectedRow: selectedCharities,
  } = useSelectRow(filteredCharities);

  const totalCharities = charities.length;
  const averageSubscriptionShare = useMemo(() => {
    if (!totalCharities) return 0;
    return (
      charities.reduce((sum, charity) => sum + charity.subscriptionShare, 0) /
      totalCharities
    ).toFixed(1);
  }, [totalCharities]);

  const handleDeleteCharity = (charityId) => {
    console.log(`Deleting charity ${charityId}`);
  };

  return (
    <AdminOutletPage>
      <AdminPageHeader
        title="Charities Management"
        description="Manage charities and subscription shares"
        actions={[
          { title: "➕ Add New Charity", onClick: () => {}, type: "primary" },
        ]}
      />

      <AdminStatsCardsSection
        data={[
          {
            title: "Total charities",
            value: totalCharities,
            extras: `${filteredCharities.length} visible`,
            icon: "🤝",
          },
          {
            title: "Avg subscription share",
            value: `${averageSubscriptionShare}%`,
            extras: "Per charity",
            icon: "📊",
          },
          {
            title: "Top charity",
            value: charities[0].name,
            extras: `${charities[0].subscriptionShare}% of each subscription`,
            icon: "⭐",
          },
        ]}
      />

      <AdminFilterSection
        filters={[
          {
            type: "text",
            title: "Search charities by name, category, or ID...",
            value: searchTerm,
            valueSetter: setSearchTerm,
          },
          {
            type: "select",
            options: categories.map((category) => ({
              value: category,
              label: category,
            })),
            value: filterCategory,
            valueSetter: setFilterCategory,
          },
        ]}
      />

      <AdminBulkActionSection data={selectedCharities} />

      <AdminPageTable
        title={`Charities ${filteredCharities.length}`}
        rowKey="publicId"
        columns={[
          {
            type: "checkbox",
            checked:
              selectedCharities.length === filteredCharities.length &&
              filteredCharities.length > 0,
            onChange: handleSelectAll,
          },
          { type: "text", label: "Charity Id", key: "id" },
          { type: "text", label: "Name", key: "name" },
          { type: "text", label: "Category", key: "category" },
          { type: "text", label: "Country", key: "country" },
          {
            type: "text",
            label: "Subscription Share",
            key: "subscriptionShare",
          },
          { type: "text", label: "Donation Share", key: "donationShare" },
          { type: "text", label: "Website", key: "website" },
          {
            type: "actions",
            label: "Actions",
            key: "action",
            actions: [
              { label: "edit", type: "edit", onClick: () => {} },
              { label: "delete", type: "delete", onClick: handleDeleteCharity },
            ],
          },
        ]}
        rows={filteredCharities}
        selectedRow={selectedCharities}
        handleRowSelect={handleRowSelect}
      />
    </AdminOutletPage>
  );
};

export default AdminCharities;
