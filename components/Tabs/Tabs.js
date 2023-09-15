import React from "react";
import { useState } from "react";
import styles from "./Tabs.module.css";
import MenuBar from "../MenuBar/MenuBar";
import Link from "next/link";

const Tabs = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className={styles.tabUnit}>
      <div className={styles.tabUnitTitle}>
        <h1>The planets</h1>
      </div>

      <button className={styles.tabUnitHburger} onClick={handleToggle}>
        <div className={styles.tabUnitHburgerLns}></div>
        <div className={styles.tabUnitHburgerLns}></div>
        <div className={styles.tabUnitHburgerLns}></div>
      </button>

      <MenuBar></MenuBar>

      <ul className={styles.tabUnitTabs}>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "mercury" } }}
          >
            Mercury
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "venus" } }}
          >
            Venus
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "earth" } }}
          >
            Earth
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "mars" } }}
          >
            Mars
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "jupiter" } }}
          >
            Jupiter
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "saturn" } }}
          >
            Saturn
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "uranus" } }}
          >
            Uranus
          </Link>
        </li>
        <li>
          <Link
            className={styles.planetTabs}
            href={{ query: { planetName: "neptune" } }}
          >
            Neptune
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
