import React from "react";
import styles from "./ImgPlanet.module.css";

const ImgPlanet = ({ image, name }) => {
  return (
    <div className={styles.image}>
      <img className={styles.imgPlanet} src={image} alt={name} />
    </div>
  );
};

export default ImgPlanet;
