import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import SecondaryButton from "../../shared/SecondaryButtton";

import Loader from "../../../shared/Loader";
import InputField from "../../shared/InputField";
import UserForm from "./UserForm";
import ProfileForm from "./ProfileForm";
import { useUser } from "./../../../context/userContext";

const Profile = () => {
  const { user: savedUser, profile: savedProfile } = useUser();
  const [profileEditing, setProfileEditing] = useState(false);
  const [userEditing, setUserEditing] = useState(false);

  const [profileFormMode, setProfileFormMode] = useState("edit");

  useEffect(() => {
    if (!savedProfile) {
      setProfileFormMode("create");
      setProfileEditing(true);
    } else {
      setProfileEditing(false);
      setProfileFormMode("edit");
    }
  }, [savedProfile]);

  const onSuccessProfileForm = function () {
    setProfileEditing(false);
  };

  const onSuccessUserForm = function () {
    setUserEditing(false);
  };

  return (
    <div className={styles.profile}>
      <UserHeaderSection
        title="My Profile"
        description="Manage your golf profile and personal information."
      />

      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>
            <span>🏌️‍♂️</span>
          </div>
          <div className={styles.profileInfo}>
            <h3>{savedUser?.fullName}</h3>
            <p>{savedUser?.email}</p>
            <p>Handicap: {savedProfile?.handicap}</p>
          </div>
          {!profileEditing && (
            <button
              className={styles.editButton}
              onClick={() => setProfileEditing(true)}
            >
              ✏️ Edit golf Info.
            </button>
          )}
          {!userEditing && (
            <button
              className={styles.editButton}
              onClick={() => setUserEditing(true)}
            >
              ✏️ Edit User Info.
            </button>
          )}
        </div>

        <div className={styles.profileForm}>
          {profileFormMode === "edit" && (
            <UserForm
              setUserEditing={setUserEditing}
              userEditing={userEditing}
              savedUser={savedUser}
              onSuccess={onSuccessUserForm}
            />
          )}
          <ProfileForm
            profileFormMode={profileFormMode}
            setProfileEditing={setProfileEditing}
            profileEditing={profileEditing}
            userPublicId={savedUser?.publicId}
            savedProfile={savedProfile}
            onSuccess={onSuccessProfileForm}
          />
        </div>
      </div>

      <div className={styles.accountActions}>
        <h4>Account Actions</h4>
        <div className={styles.actionButtons}>
          <SecondaryButton variant="simple">🔒 Change Password</SecondaryButton>
          <SecondaryButton variant="simple">
            📧 Update Email Preferences
          </SecondaryButton>
          <SecondaryButton variant="simple">🗑️ Delete Account</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
