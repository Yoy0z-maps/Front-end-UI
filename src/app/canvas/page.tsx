"use client";
import { useEffect, useRef } from "react";
import { Hill } from "./utils/hill";

import { Sun } from "./utils/sun";
import { SheepController } from "./utils/sheep-controller";
import { SheepPoint } from "./types/point";
// https://www.youtube.com/watch?v=hCHL7sydzn0 (참고 링크)

export default function Page() {
  // useRef는 .current로 전달된 인자로 초기화된 변경 가능한, 전 생애주기를 통해 유지되는 ref객체를 반환한다
  // react에서 DOM을 직접 선택해야하는 상황에 ref를, 함수형 컴포넌트에서는 useRef()라는 훅을 사용한다
  // useRef()f를 사용하여 ref를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 ref 값으로 설정해주어야한다.
  // 그러면 ref객체의 .current 값은 우리가 원하는 DOM을 가르키게 된다
  // https://velog.io/@mokyoungg/React-React%EC%97%90%EC%84%9C-Canvas-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%EB%A7%88%EC%9A%B0%EC%8A%A4-%EA%B7%B8%EB%A6%AC%EA%B8%B0
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hills = useRef<Hill[]>([
    new Hill("#fd6bea", 0.2, 12),
    new Hill("#ff59c2", 0.5, 8),
    new Hill("#ff4674", 1.4, 6),
  ]);
  const sheepController = useRef<SheepController>(new SheepController());
  const sun = useRef<Sun>(new Sun());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resize = () => {
      const stageWidth = document.body.clientWidth;
      const stageHeight = document.body.clientHeight;

      if (canvas && ctx) {
        canvas.width = stageWidth * 2;
        canvas.height = stageHeight * 2;
        ctx.scale(2, 2);

        hills.current.forEach((hill) => hill.resize(stageWidth, stageHeight));
        sheepController.current.resize(stageWidth, stageHeight);
        sun.current.resize(stageWidth, stageHeight);
      }
    };

    const animate = (t: number) => {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sun.current.draw(ctx, t);

        let dots;
        hills.current.forEach((hill) => {
          dots = hill.draw(ctx);
        });

        sheepController.current.draw(ctx, t, dots as unknown as SheepPoint[]);
        requestAnimationFrame(animate);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-canvasbg">
      <canvas ref={canvasRef} className="w-[100vw] h-[100vh]"></canvas>
    </div>
  );
}
