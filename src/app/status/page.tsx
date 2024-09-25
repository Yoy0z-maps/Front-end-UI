"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    function StatusLoader() {
      console.log(1);
      let circle = document.querySelector("#circle") as HTMLElement;
      let degree = 0;
      var targetDegree = parseInt(circle?.getAttribute("data-degree") || "100");
      let color = "#fee800";
      let number = circle?.querySelector("#number") as HTMLElement;
      console.log(number);

      if (!circle || !number) return; // 요소가 없으면 실행하지 않음

      var interval = setInterval(function () {
        degree += 1;
        if (degree > targetDegree) {
          clearInterval(interval); // targetDegree에 도달하면 인터벌 해제
          return;
        }
        circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        number.innerHTML = degree + "<span>%</span>";
        number.style.color = color;
      }, 50);

      return interval; // 인터벌 ID를 반환하여 클리어할 수 있도록 함
    }

    const intervalId = StatusLoader(); // 인터벌 ID 저장

    // 컴포넌트가 언마운트될 때 인터벌을 클리어함
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="container"
      className="flex justify-center items-center min-h-[100vh] bg-statusbackground"
    >
      <div className="relative flex justify-center items-center gap-40">
        <div
          id="circle"
          className="relative flex justify-center items-center w-[200px] h-[200px] rounded-[50%] flex-col before:content-[''] before:absolute before:inset-[5px] before:rounded-[50%] before:bg-tbackground before:opacity-80 after:content-[''] after:absolute after:w-[130px] after:h-[130px] after:bg-pbackgroun after:border-solid after:border-[15px] after:border-statusborder after:rounded-[50%] after:shadow-circle-shadow"
        >
          <h2
            id="number"
            data-degree={100}
            className="relative text-white z-[10] text-[2em] leading-4"
          >
            0<span className="text-[0.5em] font-semibold">%</span>
          </h2>
          <h4 className="relative text-white z-[10] font-semibold text-[0.8em] uppercase leading-3">
            Progress
          </h4>
        </div>
      </div>
    </div>
  );
}
