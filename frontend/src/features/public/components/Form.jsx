import React, { useState } from "react";
import styles from "./Form.module.css";
import Registration from "./Registration";
import Login from "./Login";

const Form = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = function () {
    setIsLoginForm((f) => !f);
  };
  return (
    <section id="register" className={styles.section}>
      <div className={styles.formContainer}>
        {isLoginForm ? <Login /> : <Registration />}
        <div className={styles.securityNote}>
          {isLoginForm ? (
            <p>
              Don't have any account yet?{" "}
              <b className={styles.pointer} onClick={toggleForm}>
                Register here!
              </b>
            </p>
          ) : (
            <p>
              already have account?{" "}
              <b className={styles.pointer} onClick={toggleForm}>
                login here!
              </b>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
