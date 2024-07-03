"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";

export default function Page() {
  useEffect(() => {
    const cubes = () => {
      let container = document.querySelector(`.${styles.container}`);
      let zValues = [-3, -2, -1, 0, 1, 2, 3];
      zValues.forEach((z) => {
        let cube = document.createElement("div");
        cube.classList.add(styles.cube);
        cube.style.setProperty("--z", z);

        for (let x = -3; x <= 3; x++) {
          let div = document.createElement("div");
          div.classList.add(styles.cubeDiv);
          div.style.setProperty("--x", x);
          div.style.setProperty("--y", 0);

          let span = document.createElement("span");
          span.classList.add(styles.cubeSpan);
          span.style.setProperty("--i", 3);
          div.appendChild(span);
          cube.appendChild(div);
        }
        container.appendChild(cube);
      });
      activeRandomCube();
    };

    const activeRandomCube = () => {
      let spans = document.querySelectorAll(`.${styles.cubeSpan}`);
      setInterval(() => {
        let randomIndex = Math.floor(Math.random() * spans.length);
        let randomSpan = spans[randomIndex];

        randomSpan.classList.add(styles.active);
        randomSpan.classList.add(styles.activeBefore);
        randomSpan.classList.add(styles.activeAfter);

        setTimeout(() => {
          randomSpan.classList.remove(styles.active);
          randomSpan.classList.remove(styles.activeBefore);
          randomSpan.classList.remove(styles.activeAfter);
        }, 2000);
      }, 500);
    };

    cubes();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-clr overflow-hidden">
      <div className={styles.container}></div>
    </div>
  );
}
