import React from "react";
import AdminOutletPage from "../../shared/AdminOutletPage";
import AdminPageHeader from "../../shared/AdminPageHeader";
import AdminStatsCardsSection from "../../shared/AdminStatsCardsSection";
import styles from "./AdminDashboard.module.css";
import { recentActivities, topCharities } from "../data/dashboard";

const AdminDashboard = () => {
  // Calculate stats
  const totalUsers = 1234;
  const activeUsers = 1089;
  const totalCharities = 5;
  const totalRevenue = 45678;
  const totalSubscribers = 6345;
  const successRate = 98.5;

  return (
    <AdminOutletPage>
      <AdminPageHeader
        title="Dashboard Overview"
        description="Welcome back! Here's what's happening with your platform."
      />

      {/* Quick Stats */}
      <AdminStatsCardsSection
        data={[
          {
            title: "Total Revenue",
            value: `$${totalRevenue.toLocaleString()}`,
            extras: "+12.5% from last month",
            icon: "💰",
          },
          {
            title: "Active Users",
            value: activeUsers,
            extras: `${Math.round((activeUsers / totalUsers) * 100)}% of total users`,
            icon: "👥",
          },
          {
            title: "Total Charities",
            value: totalCharities,
            extras: "All active and supported",
            icon: "🤝",
          },
          {
            title: "Success Rate",
            value: `${successRate}%`,
            extras: "Payment completion rate",
            icon: "✅",
          },
        ]}
      />

      {/* Recent Activities and Top Charities */}
      <div className={styles.bottomSection}>
        <div className={styles.activitiesCard}>
          <h3>Recent Activities</h3>
          <div className={styles.activitiesList}>
            {recentActivities.map((activity) => (
              <div key={activity.id} className={styles.activityItem}>
                <div className={styles.activityIcon}>{activity.icon}</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>
                    <strong>{activity.user}</strong> {activity.action}
                  </p>
                  <span className={styles.activityTime}>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.charitiesCard}>
          <h3>Top Performing Charities</h3>
          <div className={styles.charitiesList}>
            {topCharities.map((charity, index) => (
              <div key={charity.id} className={styles.charityItem}>
                <div className={styles.charityRank}>#{index + 1}</div>
                <div className={styles.charityInfo}>
                  <h4>{charity.name}</h4>
                  <p>
                    ${charity.donations.toLocaleString()} •{" "}
                    {charity.subscribers} subscribers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminOutletPage>
  );
};

export default AdminDashboard;
