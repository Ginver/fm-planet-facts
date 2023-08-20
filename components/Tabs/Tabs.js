import React from "react";
import { useState } from "react";
import styles from "./Tabs.module.css";
import MenuBar from "../MenuBar/MenuBar";

const Tabs = () => {
  const [planetTabs, setPlanetTabs] = useState(0);

  const handleTabClick = (index) => {
    setPlanetTabs(index);
  };

  return (
    <div className={styles.tabUnit}>
      <div className={styles.tabUnitTitle}>
        <h1>The planets</h1>
      </div>

      <div className={styles.tabUnitHburger}>
        <div className={styles.tabUnitHburgerLns}></div>
        <div className={styles.tabUnitHburgerLns}></div>
        <div className={styles.tabUnitHburgerLns}></div>
      </div>

      <div className={styles.tabUnitTabs}>
        <p className={styles.planetTabs}>Mercury</p>
        <p className={styles.planetTabs}>Venus</p>
        <p className={styles.planetTabs}>Earth</p>
        <p className={styles.planetTabs}>Mars</p>
        <p className={styles.planetTabs}>Jupiter</p>
        <p className={styles.planetTabs}>Saturn</p>
        <p className={styles.planetTabs}>Uranus</p>
        <p className={styles.planetTabs}>Neptune</p>
      </div>

      {/* <div className={styles.tabUnitTabs}>
        <ul>
          <li
            className={planetTabs === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Mercury
          </li>
          <li
            className={planetTabs === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Venus
          </li>
          <li
            className={planetTabs === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Earth
          </li>
          <li
            className={planetTabs === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Mars
          </li>
          <li
            className={planetTabs === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Jupiter
          </li>
          <li
            className={planetTabs === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Saturn
          </li>
          <li
            className={planetTabs === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Uranus
          </li>
          <li
            className={planetTabs === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Neptune
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Tabs;
