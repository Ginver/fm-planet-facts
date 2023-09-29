import React from "react";
import styles from "./InfoBtns1.module.css";

const InfoBtns1 = ({ children, handleclick, ...props }) => {
  return (
    <>
      <div {...props} className={styles.infoBtns1}>
        <button
          {...props}
          className={styles.infoBtnsTitles}
          onClick={() => handleclick("Overview")}
        >
          overview
        </button>
        <button
          {...props}
          className={styles.infoBtnsTitles}
          onClick={() => handleclick("Structure")}
        >
          structue
        </button>
        <button
          {...props}
          className={styles.infoBtnsTitles}
          onClick={() => handleclick("Geology")}
        >
          geology
        </button>

        {children}
      </div>
    </>
  );
};

export default InfoBtns1;
