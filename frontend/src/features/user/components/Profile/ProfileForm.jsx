import React, { useEffect, useState } from "react";
import InputField from "../../shared/InputField";

import styles from "./ProfileForm.module.css";
import ActionButtons from "./ActionButtons";
import { toast } from "react-toastify";
import { createProfileAPI, updateProfileAPI } from "../../services/userAPI";

const ProfileForm = ({
  profileEditing,
  setProfileEditing,
  profileFormMode,
  userPublicId,
  savedProfile,
  onSuccess,
}) => {
  const [profile, setProfile] = useState({
    handicap: "",
    homeCourse: "",
    experience: "",
    bio: "",
  });

  useEffect(() => {
    setProfile({
      handicap: savedProfile?.handicap,
      homeCourse: savedProfile?.homeCourse,
      experience: savedProfile?.experienceLevel,
      bio: savedProfile?.bio,
    });
  }, [savedProfile?.publicId]);

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
    try {
      if (profile.handicap === "")
        throw new Error("Please enter handicap value");

      if (profile.homeCourse === "")
        throw new Error("please enter your home course");

      if (profile.experience === "")
        throw new Error("please select your exeprience");

      if (profile.bio === "")
        throw new Error("please write about yourself in bio!");

      if (profileFormMode === "create") {
        const res = await createProfileAPI({
          handicap: profile.handicap,
          user: userPublicId,
          homeCourse: profile.homeCourse,
          experienceLevel: profile.experience,
          bio: profile.bio,
        });
        console.log(res);
        if (res.data.status === "success")
          toast.success("Profile created successfull");
      } else {
        const res = await updateProfileAPI(savedProfile?.publicId, profile);
        if (res.data.status === "success")
          toast.success("Profile edited successfull");
      }
      onSuccess();
    } catch (err) {
      toast.error(err.message);
    } finally {
    }
    console.log("profile edit save");
  };

  return (
    <div>
      <div className={styles.formSection}>
        <h4>
          {profileFormMode === "create"
            ? `Golf information: Please complete your profile`
            : "Golf information"}
        </h4>
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
    </div>
  );
};

export default ProfileForm;
