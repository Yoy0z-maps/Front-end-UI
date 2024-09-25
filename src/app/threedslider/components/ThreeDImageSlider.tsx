"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SliderButton from "./SliderButton";

export default function ThreeDImageSlider() {
  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
    "/images/img6.jpeg",
    "/images/img7.jpeg",
  ];

  useEffect(() => {
    let prev = document.querySelector("#prev") as HTMLElement;
    let next = document.querySelector("#next") as HTMLElement;

    next.addEventListener("click", function () {
      let items = document.querySelectorAll("#container div");
      const container = document.querySelector("#container");
      // TypeScript => Check 'null'
      if (container && items.length > 0) {
        container.appendChild(items[0]);
      }
    });

    prev.addEventListener("click", function () {
      let items = document.querySelectorAll("#container div");
      const container = document.querySelector("#container");
      if (container && items.length > 0) {
        container.prepend(items[items.length - 1]);
      }
    });
  }, []);

  return (
    <>
      <div
        id="container"
        className="relative flex transform-preserve-3d perspective-500"
      >
        {images.map((image, index) => (
          <div
            id="card"
            key={index}
            className="absolute w-[200px] h-[300px] bg-white custom-top custom-left transition duration-1000 shadow-threedslider transform-preserve-3d transform origin-bottom select-none reflect-below"
          >
            <Image
              className="absolute top-0 left-0"
              alt="image"
              src={image}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <SliderButton />
    </>
  );
}
