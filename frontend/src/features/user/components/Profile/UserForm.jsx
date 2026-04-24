import { useEffect, useState } from "react";
import InputField from "../../shared/InputField";
import ActionButtons from "./ActionButtons";
import styles from "./UserForm.module.css";
import { updateUserAPI } from "../../services/userAPI";
import { toast } from "react-toastify";

const UserForm = function ({
  onSuccess,
  savedUser,
  setUserEditing,
  userEditing,
}) {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUser({
      fullName: savedUser?.fullName,
      email: savedUser?.email,
      phone: savedUser?.phone,
    });
  }, [savedUser?.publicId]);

  const handleUserEditCancle = () => {
    // TODO: Reset to original values
    setUserEditing(false);
  };

  const handleUserEditRequest = async function () {
    try {
      if (user.fullName === "") throw new Error("Please enter your full name");
      if (user.email === "") throw new Error("Please enter your email");
      if (user.phone === "") throw new Error("Please enter your phone");

      const res = await updateUserAPI(savedUser?.publicId, user);
      console.log(res);
      if (res.data.status === "success") {
        toast.success("User edited successfull");
        onSuccess();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleUserEditSave = () => {
    // TODO: Save to API
    handleUserEditRequest();
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
