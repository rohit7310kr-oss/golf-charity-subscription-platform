import React from "react";
import styles from "./ActionButtons.module.css";
import SecondaryButton from "../../shared/SecondaryButtton";

const ActionButtons = ({ onClickCancle, onClickSave }) => {
  return (
    <div className={styles.formActions}>
      <SecondaryButton variant="simple" onClick={onClickCancle}>
        Cancel
      </SecondaryButton>
      <SecondaryButton onClick={onClickSave}>Save Changes</SecondaryButton>
    </div>
  );
};

export default ActionButtons;
