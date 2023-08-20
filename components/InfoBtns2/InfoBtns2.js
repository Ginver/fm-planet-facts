import React from "react";
import styles from "./InfoBtns2.module.css";

const InfoBtns2 = ({ children, ...props }) => {
  return (
    <>
      <div>
        <button {...props} className={styles.infoBtns2}>
          {children}
        </button>
      </div>
    </>
  );
};

export default InfoBtns2;
