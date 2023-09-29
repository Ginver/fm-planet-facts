import React from "react";
import styles from "./DescriptionPlanet.module.css";

const DescriptionPlanet = (props) => {
  return (
    <>
      <p className={styles.descriptionPlanet}>{props.contentDesc}</p>
    </>
  );
};

export default DescriptionPlanet;
