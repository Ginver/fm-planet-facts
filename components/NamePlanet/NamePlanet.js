import React from "react";
import styles from "./NamePlanet.module.css";

const NamePlanet = (props) => {
  return <h1 className={styles.namePlanet}>{props.name}</h1>;
};

export default NamePlanet;
