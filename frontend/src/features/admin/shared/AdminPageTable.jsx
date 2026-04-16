import styles from "./AdminPageTable.module.css";

const AdminPageTable = function ({
  title,
  columns,
  rows,
  selectedRow = [],
  handleRowSelect,
  handleRoleChange,
  rowKey = "publicId",
}) {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <h3>{title}</h3>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.usersTable}>
          <thead>
            <tr>
              {columns.map((col) => {
                if (col.type === "checkbox")
                  return (
                    <th key="checkbox">
                      <input
                        type={col.type}
                        checked={col.checked}
                        onChange={col.onChange}
                      />
                    </th>
                  );

                if (
                  col.type === "text" ||
                  col.type === "date" ||
                  col.type === "select"
                )
                  return <th key={col.key || col.label}>{col.label}</th>;
                if (col.type === "actions")
                  return <th key={col.key || col.label}>{col.label}</th>;
                return <th key={col.key || col.label} />;
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[rowKey]}>
                {columns.map((col, i) => {
                  if (col.type === "select")
                    return (
                      <td key={i}>
                        <select
                          value={row.role}
                          onChange={(e) =>
                            handleRoleChange(row[rowKey], e.target.value)
                          }
                          className={`${styles.roleSelect} ${
                            row.role === "admin" ? styles.adminRole : ""
                          }`}
                        >
                          {col.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </td>
                    );
                  if (col.type === "checkbox")
                    return (
                      <td key={i}>
                        <input
                          type="checkbox"
                          checked={selectedRow.includes(row[rowKey])}
                          onChange={() => handleRowSelect(row[rowKey])}
                        />
                      </td>
                    );
                  if (col.type === "date")
                    return (
                      <td key={i}>
                        {new Date(row[col.key]).toLocaleDateString()}
                      </td>
                    );
                  if (col.type === "text")
                    return <td key={i}>{row[col.key]}</td>;
                  if (col.type === "actions") {
                    return (
                      <td key={i}>
                        <div className={styles.actionButtons}>
                          {col.actions.map((action) => (
                            <button
                              key={action.type}
                              className={styles.actionButton}
                              onClick={() => action.onClick(row[rowKey])}
                              title={action.label}
                            >
                              {action.type === "edit" ? "✏️" : "🗑️"}
                            </button>
                          ))}
                        </div>
                      </td>
                    );
                  }
                  return <td key={i} />;
                })}
              </tr>
            ))}

            {/* 
              <button
                className={`${styles.actionButton} ${
                  user.status === "active"
                    ? styles.suspendButton
                    : styles.activateButton
                }`}
                onClick={() => handleStatusToggle(user.id)}
                title={user.status === "active" ? "Suspend" : "Activate"}
              >
                {user.status === "active" ? "🚫" : "✅"}
              </button>
          
            </div> */}
            {/* // <td> */}
            {/* <input
                    type="checkbox"
                    checked={selectedRow.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                  />
                </td>
                <td className={styles.userId}>{row.id}</td>
                <td>
                  <div className={styles.userInfo}>
                    <div className={styles.userAvatar}>
                      {user.fullName.charAt(0)}
                    </div>
                    <span>{user.fullName}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className={`${styles.roleSelect} ${
                      user.role === "admin" ? styles.adminRole : ""
                    }`}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${
                      user.status === "active"
                        ? styles.activeStatus
                        : styles.inactiveStatus
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                <td>{new Date(user.lastLogin).toLocaleDateString()}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.actionButton}
                      title="View Details"
                    >
                      👁️
                    </button>
                    <button className={styles.actionButton} title="Edit User">
                      ✏️
                    </button>
                    <button
                      className={`${styles.actionButton} ${
                        user.status === "active"
                          ? styles.suspendButton
                          : styles.activateButton
                      }`}
                      onClick={() => handleStatusToggle(user.id)}
                      title={user.status === "active" ? "Suspend" : "Activate"}
                    >
                      {user.status === "active" ? "🚫" : "✅"}
                    </button>
                    <button
                      className={styles.actionButton}
                      onClick={() => handleDeleteUser(user.id)}
                      title="Delete User"
                    >
                      🗑️
                    </button>
                  </div>
                </td> */}
            {/* </tr>
            ))} */}
          </tbody>
        </table>
      </div>

      {/* {filteredUsers.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>👥</div>
          <h3>No users found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )} */}
    </div>
  );
};

export default AdminPageTable;
