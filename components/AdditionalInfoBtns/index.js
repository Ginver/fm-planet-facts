import React from "react";
import styles from "./AdditionalInfoBtns.module.css";
import InfoBtns from "../InfoBtns/InfoBtns";

const AdditionalInfoBtns = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={styles.additionalInfoBtns}>
        <InfoBtns>
          <p className={styles.infoBtnsNr}>01</p>
          <p className={styles.infoBtnsTitle}>overview</p>
        </InfoBtns>
        <InfoBtns>
          <p className={styles.infoBtnsNr}>02</p>
          <p className={styles.infoBtnsTitle}>internal structure</p>
        </InfoBtns>
        <InfoBtns>
          <p className={styles.infoBtnsNr}>03</p>
          <p className={styles.infoBtnsTitle}>surface geology</p>
        </InfoBtns>
        {children}
      </div>
    </>
  );
};

export default AdditionalInfoBtns;
