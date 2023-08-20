import React from "react";
import styles from "./ImgPlanet.module.css";

const ImgPlanet = ({ image, name, children, ...props }) => {
  return (
    <div {...props} className={styles.image}>
      <img className={styles.imgPlanet} src={image} alt={name} />
      {children}
    </div>
  );
};

export default ImgPlanet;
