import { useState } from "react";
import InputField from "../../shared/InputField";
import ActionButtons from "./ActionButtons";
import styles from "./UserForm.module.css";

const UserForm = function ({ user, setUser, setUserEditing, userEditing }) {
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserEditCancle = () => {
    // TODO: Reset to original values
    setUserEditing(false);
  };

  const handleUserEditSave = () => {
    // TODO: Save to API
    setUserEditing(false);
  };

  return (
    <div className={styles.formSection}>
      <h4>Personal Information</h4>
      <div className={styles.formGrid}>
        <InputField
          htmlId="fullName"
          name="fullName"
          onChange={handleUserInputChange}
          disabled={!userEditing}
          value={user.fullName}
          label="Full name"
          type="text"
        />
        <InputField
          htmlId="email"
          name="email"
          onChange={handleUserInputChange}
          disabled={!userEditing}
          value={user.email}
          type="email"
          label="Email"
        />
        <InputField
          htmlId="phone"
          name="phone"
          onChange={handleUserInputChange}
          disabled={!userEditing}
          value={user.phone}
          type="tel"
          label="phone"
        />
      </div>

      {userEditing && (
        <ActionButtons
          onClickCancle={handleUserEditCancle}
          onClickSave={handleUserEditSave}
        />
      )}
    </div>
  );
};

export default UserForm;
