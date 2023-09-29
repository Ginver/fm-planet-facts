import React from "react";
import styles from "./AdditionalInfoBtns.module.css";
import InfoBtns2 from "../InfoBtns2/InfoBtns2";

const AdditionalInfoBtns = ({ children, handleclick, ...props }) => {
  return (
    <>
      <div {...props} className={styles.additionalInfoBtns}>
        <InfoBtns2 onClick={() => handleclick("Overview")}>
          <p className={styles.infoBtnsNr}>01</p>
          <p className={styles.infoBtnsTitle}>overview</p>
        </InfoBtns2>

        <InfoBtns2 onClick={() => handleclick("Structure")}>
          <p className={styles.infoBtnsNr}>02</p>
          <p className={styles.infoBtnsTitle}>internal structure</p>
        </InfoBtns2>

        <InfoBtns2 onClick={() => handleclick("Geology")}>
          <p className={styles.infoBtnsNr}>03</p>
          <p className={styles.infoBtnsTitle}>surface geology</p>
        </InfoBtns2>

        {children}
      </div>
    </>
  );
};

export default AdditionalInfoBtns;
