import React from "react";
import styles from "./InfoBtns.module.css";

const InfoBtns = ({ children, ...props }) => {
  return (
    <>
      <div>
        <button {...props} className={styles.infoBtns}>
          {children}
        </button>
      </div>
    </>
  );
};

export default InfoBtns;
