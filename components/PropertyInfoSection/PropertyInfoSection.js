import React from "react";
import styles from "./PropertyInfoSection.module.css";

const PropertyInfoSection = ({ children, ...props }) => {
  return (
    <>
      <div className={styles.propertyInfoSection}>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 {...props} className={styles.dataType}>
            rotation time {children}
          </h4>
          <p {...props} className={styles.data}>
            123456 days{children}
          </p>
        </div>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 {...props} className={styles.dataType}>
            revolution time {children}
          </h4>
          <p {...props} className={styles.data}>
            123456 days{children}
          </p>
        </div>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 {...props} className={styles.dataType}>
            radius {children}
          </h4>
          <p {...props} className={styles.data}>
            123456 km{children}
          </p>
        </div>
        <div className={styles.propertyInfoSectionBlock}>
          <h4 {...props} className={styles.dataType}>
            {children} average temp
          </h4>
          <p {...props} className={styles.data}>
            123456°C{children}
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyInfoSection;
