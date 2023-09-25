import React from "react";
import styles from "./SourceLink.module.css";
// import icon from "@/public/assets/icon-source.svg";
import Image from "next/image";

const SourceLink = ({ href }) => {
  return (
    <div className={styles.sectionSourceLink}>
      <p className={styles.source}>Source: </p>
      <a className={styles.sourceLink} href={href} target="_blank">
        Wikipedia{" "}
        <img
          className={styles.icon}
          src="./assets/icon-source.svg"
          alt="errow"
        />
      </a>
    </div>
  );
};

export default SourceLink;
