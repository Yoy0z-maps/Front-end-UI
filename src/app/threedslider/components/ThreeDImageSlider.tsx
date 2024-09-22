"use client";
import { useState } from "react";
import Image from "next/image";
import SliderButton from "./SliderButton";

export default function ThreeDImageSlider() {
  // 초기 이미지 배열 상태 설정
  const [images, setImages] = useState([
    "/images/img1.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
    "/images/img6.jpeg",
    "/images/img7.jpeg",
  ]);

  // 왼쪽 버튼 클릭 시 배열의 첫 번째 요소를 마지막으로 이동
  const handlePrev = () => {
    setImages((prevImages) => {
      const firstImage = prevImages[0];
      const restImages = prevImages.slice(1);
      return [...restImages, firstImage];
    });
  };

  // 오른쪽 버튼 클릭 시 배열의 마지막 요소를 첫 번째로 이동
  const handleNext = () => {
    setImages((prevImages) => {
      const lastImage = prevImages[prevImages.length - 1];
      const restImages = prevImages.slice(0, prevImages.length - 1);
      return [lastImage, ...restImages];
    });
  };

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
            className="absolute w-[200px] h-[300px] bg-white custom-top custom-left transition duration-700 shadow-threedslider transform-preserve-3d transform origin-bottom select-none reflect-below"
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
      <SliderButton onPrev={handlePrev} onNext={handleNext} />
    </>
  );
}
