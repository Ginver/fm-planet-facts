import React from "react";
import styles from "./AdditionalInfoBtns.module.css";
import InfoBtns2 from "../InfoBtns2/InfoBtns2";

const AdditionalInfoBtns = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={styles.additionalInfoBtns}>
        <InfoBtns2>
          <p className={styles.infoBtnsNr}>01</p>
          <p className={styles.infoBtnsTitle}>overview</p>
        </InfoBtns2>

        <InfoBtns2>
          <p className={styles.infoBtnsNr}>02</p>
          <p className={styles.infoBtnsTitle}>internal structure</p>
        </InfoBtns2>

        <InfoBtns2>
          <p className={styles.infoBtnsNr}>03</p>
          <p className={styles.infoBtnsTitle}>surface geology</p>
        </InfoBtns2>

        {children}
      </div>
    </>
  );
};

export default AdditionalInfoBtns;
