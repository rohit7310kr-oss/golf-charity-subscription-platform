import styles from "./AdminFilterSection.module.css";

const AdminFilterSection = function ({ filters }) {
  return (
    <div className={styles.filtersSection}>
      {filters.map((el) => {
        if (el.type === "text")
          return (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder={el.title}
                value={el.value}
                onChange={(e) => el.valueSetter(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
          );

        if (el.type === "select")
          return (
            <div className={styles.filterControls}>
              <select
                value={el.value}
                onChange={(e) => el.valueSetter(e.target.value)}
                className={styles.filterSelect}
              >
                {el.options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          );
      })}
    </div>
  );
};

export default AdminFilterSection;
