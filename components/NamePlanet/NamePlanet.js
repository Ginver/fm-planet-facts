import React from "react";
import styles from "./NamePlanet.module.css";

const NamePlanet = ({ children, ...props }) => {
  return (
    <h1 {...props} className={styles.namePlanet}>
      {children}
    </h1>
  );
};

export default NamePlanet;
