import React from "react";
import styles from "./DescriptionPlanet.module.css";

const DescriptionPlanet = ({ children, ...props }) => {
  //   return (
  //     <p
  //       //   style={props.style}
  //       //   onClick={props.onClick}
  //       // spreading props:
  //       {...props}
  //       className={styles.descriptionPlanet}
  //     >
  //       {props.paragraph}
  //     </p>
  //   );
  return (
    <p
      //   style={props.style}
      //   onClick={props.onClick}
      // spreading props:
      {...props}
      className={styles.descriptionPlanet}
    >
      {children}
    </p>
  );
};

export default DescriptionPlanet;
