"use client";

import { useEffect } from "react";

export default function Card() {
  useEffect(() => {
    const container = document.querySelector("#container") as HTMLElement;
    const overlay = document.querySelector("#overlay") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      if (container && overlay) {
        var x = e.offsetX;
        var y = e.offsetY;
        var rotateY = (-1 / 5) * x + 20;
        var rotateX = (4 / 30) * y - 20;

        const rect = container.getBoundingClientRect();
        const x1 = e.clientX - rect.left;
        const y1 = e.clientY - rect.top;

        const posX = (x1 / rect.width) * 100; // 백분율로 변환
        const posY = (y1 / rect.height) * 100;

        overlay.style.backgroundPosition = `${posX}% ${posY}%`;
        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const handleMouseOut = () => {
      if (container && overlay) {
        container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        overlay.style.filter = `opacity(0)`;
      }
    };

    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseout", handleMouseOut);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        id="container"
        className="relative w-[220px] h-[310px] rounded-lg overflow-hidden mt-[200px] transition-all duration-300"
      >
        <div
          id="overlay"
          className="absolute w-[220px] h-[310px] bg-custom-gradient bg-pos-100 bg-150 brightness-110 opacity-80"
        ></div>
        <div className="w-full h-full bg-[url('https://sports.chosun.com/news/html/2024/10/30/2024103001002262200311162.jpg')] bg-cover"></div>
      </div>
    </div>
  );
}
