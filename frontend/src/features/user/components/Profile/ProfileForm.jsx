import React, { useState } from "react";
import InputField from "../../shared/InputField";

import styles from "./ProfileForm.module.css";
import ActionButtons from "./ActionButtons";

const ProfileForm = ({
  profile,
  setProfile,
  profileEditing,
  setProfileEditing,
}) => {
  const handleProfileEditCancle = () => {
    // TODO: Reset to original values
    setProfileEditing(false);
  };

  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileEditSave = async () => {
    console.log("profile edit save");
  };

  return (
    <>
      <div className={styles.formSection}>
        <h4>Golf Information</h4>
        <div className={styles.formGrid}>
          <InputField
            htmlId="handicap"
            name="handicap"
            onChange={handleProfileInputChange}
            disabled={!profileEditing}
            value={profile.handicap}
            type="number"
            label="Handicap"
          />

          <InputField
            htmlId="homeCourse"
            name="homeCourse"
            onChange={handleProfileInputChange}
            disabled={!profileEditing}
            value={profile.homeCourse}
            type="text"
            label="Home course"
          />

          <InputField
            htmlId="experience"
            name="experience"
            onChange={handleProfileInputChange}
            disabled={!profileEditing}
            value={profile.experience}
            type="select"
            label="Experience level"
          />
        </div>
      </div>

      <div className={styles.formSection}>
        <h4>Bio</h4>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleProfileInputChange}
          disabled={!profileEditing}
          rows="4"
          placeholder="Tell us about yourself..."
        />
      </div>

      {profileEditing && (
        <ActionButtons
          onClickCancle={handleProfileEditCancle}
          onClickSave={handleProfileEditSave}
        />
      )}
    </>
  );
};

export default ProfileForm;
