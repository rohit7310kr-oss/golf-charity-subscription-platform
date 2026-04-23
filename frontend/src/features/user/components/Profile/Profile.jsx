import React, { useState } from "react";
import styles from "./Profile.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import SecondaryButton from "../../shared/SecondaryButtton";

import Loader from "../../../public/shared/Loader";
import InputField from "../../shared/InputField";
import UserForm from "./UserForm";
import ProfileForm from "./ProfileForm";
import { useUser } from "./../../../context/userContext";

const Profile = () => {
  const { user: savedUser } = useUser();
  console.log(savedUser);
  const [profileEditing, setProfileEditing] = useState(false);
  const [userEditing, setUserEditing] = useState(false);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [profile, setProfile] = useState({
    publicId: "",
    handicap: "",
    homeCourse: "",
    experience: "",
    bio: "",
  });

  return (
    <div className={styles.profile}>
      {false ? (
        <Loader />
      ) : (
        <>
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
                <h3>{user.fullName}</h3>
                <p>{user.email}</p>
                <p>Handicap: {profile.handicap}</p>
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
              <UserForm
                user={user}
                setUser={setUser}
                setUserEditing={setUserEditing}
                userEditing={userEditing}
              />
              <ProfileForm
                profile={profile}
                setProfile={setProfile}
                setProfileEditing={setProfileEditing}
                profileEditing={profileEditing}
              />
            </div>
          </div>

          <div className={styles.accountActions}>
            <h4>Account Actions</h4>
            <div className={styles.actionButtons}>
              <SecondaryButton variant="simple">
                🔒 Change Password
              </SecondaryButton>
              <SecondaryButton variant="simple">
                📧 Update Email Preferences
              </SecondaryButton>
              <SecondaryButton variant="simple">
                🗑️ Delete Account
              </SecondaryButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
