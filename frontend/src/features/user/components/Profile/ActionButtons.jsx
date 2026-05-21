import React from "react";
import styles from "./ActionButtons.module.css";
import SecondaryButton from "../../shared/SecondaryButtton";

const ActionButtons = ({ onClickCancle, onClickSave, loading }) => {
  return (
    <div className={styles.formActions}>
      <SecondaryButton
        disabled={loading}
        variant="simple"
        onClick={onClickCancle}
      >
        Cancel
      </SecondaryButton>
      <SecondaryButton disabled={loading} onClick={onClickSave}>
        {loading ? "wait..." : "Save Changes"}
      </SecondaryButton>
    </div>
  );
};

export default ActionButtons;
