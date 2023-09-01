import React from "react";
import styles from "./ImgPlanet.module.css";
// import { useState } from "react";

const ImgPlanet = ({ image, name }) => {
  return (
    <div className={styles.image}>
      <img
        className={styles.imgPlanet}
        src={image}
        alt={name}
        // onClick={() => setImageType("overview")}
      />
    </div>
  );
};

export default ImgPlanet;
