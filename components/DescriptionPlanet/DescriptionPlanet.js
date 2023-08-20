import React from "react";
import styles from "./DescriptionPlanet.module.css";

const DescriptionPlanet = ({ children, ...props }) => {
  return (
    <>
      <p {...props} className={styles.descriptionPlanet}>
        {children}
      </p>
    </>
  );
};

export default DescriptionPlanet;
