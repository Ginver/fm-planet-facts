import React from "react";
import styles from "./MenuBar.module.css";
// import MenuBarTab from "../MenuBarTab/MenuBarTab";

const MenuBar = () => {
  return (
    <>
      <div className={styles.menuBarUnit}>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorMercury}></div>
              <p className={styles.planetTabName}>Mercury</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>

        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorVenus}></div>
              <p className={styles.planetTabName}>Venus</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorEarth}></div>
              <p className={styles.planetTabName}>Mars</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorJupiter}></div>
              <p className={styles.planetTabName}>Jupiter</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorSaturne}></div>
              <p className={styles.planetTabName}>Saturne</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorUranus}></div>
              <p className={styles.planetTabName}>Uranus</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorNeptune}></div>
              <p className={styles.planetTabName}>Neptune</p>
            </div>

            <div>
              <svg
                className={styles.iconErrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
          </div>
        </a>

        {/* <MenuBarTab className={styles.mercury}>Mercury</MenuBarTab>
        <MenuBarTab className={styles.venus}>Venus</MenuBarTab>
        <MenuBarTab className={styles.earth}>Earth</MenuBarTab>
        <MenuBarTab className={styles.mars}>Mars</MenuBarTab>
        <MenuBarTab className={styles.jupiter}>Jupiter</MenuBarTab>
        <MenuBarTab className={styles.saturne}>Saturne</MenuBarTab>
        <MenuBarTab className={styles.uranus}>Uranus</MenuBarTab>
        <MenuBarTab className={styles.neptune}>Neptune</MenuBarTab> */}
      </div>
    </>
  );
};

export default MenuBar;
