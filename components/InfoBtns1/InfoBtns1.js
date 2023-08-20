import React from "react";
import styles from "./InfoBtns1.module.css";

const InfoBtns1 = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={styles.infoBtns1}>
        <button {...props} className={styles.infoBtnsTitles}>
          overview
        </button>
        <button {...props} className={styles.infoBtnsTitles}>
          structue
        </button>
        <button {...props} className={styles.infoBtnsTitles}>
          geology
        </button>

        {children}
      </div>
    </>
  );
};

export default InfoBtns1;
