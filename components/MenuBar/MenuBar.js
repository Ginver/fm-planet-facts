import React from "react";
import styles from "./MenuBar.module.css";
import Link from "next/link";

const MenuBar = () => {
  return (
    <>
      <div className={styles.menuBarUnit}>
        <a>
          <div className={styles.menuBarTabUnit}>
            <div className={styles.planetTabUnit}>
              <div className={styles.planetTabColorMercury}></div>
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "mercury" } }}
              >
                Mercury
              </Link>
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
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "venus" } }}
              >
                Venus
              </Link>
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
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "mars" } }}
              >
                Mars
              </Link>
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
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "jupiter" } }}
              >
                Jupiter
              </Link>
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
              <div className={styles.planetTabColorSaturn}></div>
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "saturn" } }}
              >
                Saturn
              </Link>
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
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "uranus" } }}
              >
                Uranus
              </Link>
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
              <Link
                className={styles.planetTabName}
                href={{ query: { planetName: "neptune" } }}
              >
                Neptune
              </Link>
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
      </div>
    </>
  );
};

export default MenuBar;
