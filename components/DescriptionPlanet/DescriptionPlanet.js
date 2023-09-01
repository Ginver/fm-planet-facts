import React from "react";
import styles from "./DescriptionPlanet.module.css";

const DescriptionPlanet = (props) => {
  return (
    <>
      <p className={styles.descriptionPlanet}>{props.overview}</p>
    </>
  );
};

export default DescriptionPlanet;
