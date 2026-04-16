import React, { useState } from "react";
import styles from "./Profile.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import SecondaryButton from "../../shared/SecondaryButtton";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    handicap: 12.5,
    homeCourse: "Pine Valley Golf Club",
    experience: "intermediate",
    bio: "Passionate golfer who loves the game and the challenge it brings.",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // TODO: Save to API
    console.log("Saving profile:", profile);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    // TODO: Reset to original values
    setIsEditing(false);
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
            <h3>
              {profile.firstName} {profile.lastName}
            </h3>
            <p>{profile.email}</p>
            <p>Handicap: {profile.handicap}</p>
          </div>
          {!isEditing && (
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>

        <div className={styles.profileForm}>
          <div className={styles.formSection}>
            <h4>Personal Information</h4>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h4>Golf Information</h4>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="handicap">Handicap</label>
                <input
                  type="number"
                  id="handicap"
                  name="handicap"
                  value={profile.handicap}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  step="0.1"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="homeCourse">Home Course</label>
                <input
                  type="text"
                  id="homeCourse"
                  name="homeCourse"
                  value={profile.homeCourse}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="experience">Experience Level</label>
                <select
                  id="experience"
                  name="experience"
                  value={profile.experience}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h4>Bio</h4>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows="4"
              placeholder="Tell us about yourself..."
            />
          </div>

          {isEditing && (
            <div className={styles.formActions}>
              <SecondaryButton variant="simple" onClick={handleCancel}>
                Cancel
              </SecondaryButton>
              <SecondaryButton onClick={handleSave}>
                Save Changes
              </SecondaryButton>
            </div>
          )}
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
