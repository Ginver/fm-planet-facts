import React from "react";
import styles from "./SourceLink.module.css";
// import icon from "@/public/assets/icon-source.svg";

const SourceLink = ({ href, icon }) => {
  return (
    <div>
      <a className={styles.sourceLink} href={href} target="_blank">
        Source: Wikipedia <img className={styles.icon} src={icon} />
      </a>
    </div>
  );
};

export default SourceLink;
