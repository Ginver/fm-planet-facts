import React from "react";
import styles from "./PropertyInfoSection.module.css";

const PropertyInfoSection = (props) => {
  return (
    <>
      <div className={styles.propertyInfoSection}>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 className={styles.dataType}>rotation time</h4>
          <p className={styles.data}>{props.rotation} days</p>
        </div>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 className={styles.dataType}>revolution time</h4>
          <p className={styles.data}>{props.revolution} days</p>
        </div>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 className={styles.dataType}>radius</h4>
          <p className={styles.data}>{props.radius} km</p>
        </div>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 className={styles.dataType}>average temp</h4>
          <p className={styles.data}>{props.temperature}°C</p>
        </div>
      </div>
    </>
  );
};

export default PropertyInfoSection;
