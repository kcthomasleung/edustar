import React, { useEffect } from "react";
import styles from "./styles.module.css";

const SparkleButton = () => {
  useEffect(() => {
    const RANDOM = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const PARTICLES = document.querySelectorAll(`.${styles.particle}`);
    PARTICLES.forEach((P) => {
      P.setAttribute("style", `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${
          Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)
        }%;
        --origin-y: ${
          Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)
        }%;
        --size: ${RANDOM(40, 90) / 100};
      `);
    });
  }, []);

  return (
    <div className={styles["sparkle-button"]}>
      <button>
        <span className={styles.spark}></span>
        {/* <span className={styles.spark}></span> */}
        <span className={styles.backdrop}></span>
      </button>
      <div className={styles.bodydrop}></div>
      <div className={`${styles["particle-pen"]} ${styles.bodydrop}`}>
        {[...Array(30)].map((_, index) => (
          <div className={styles.particle} key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path d="M24 4L9.9 15 24 26 38.1 15 24 4zm0-4L6 15l18 11.5L42 15 24 0z" />
            </svg>
          </div>
        ))}
      </div>
      <span className={styles.text}>Sparkle Button</span>
    </div>
  );
};

export default SparkleButton;
