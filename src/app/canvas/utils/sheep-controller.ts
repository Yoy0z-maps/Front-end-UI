import { SheepPoint } from "../types/point"; // SheepPoint 타입을 사용한다고 가정
import { Sheep } from "./sheep";

export class SheepController {
  private img: HTMLImageElement | null = null;
  private items: Sheep[] = [];
  private cur: number = 0;
  private isLoaded: boolean = false;
  private stageWidth: number = 0;
  private stageHeight: number = 0;

  constructor() {
    // 브라우저 전용 API(Image, window, document 등)를 Next.js 서버에서 렌더링 방지
    if (typeof window !== "undefined") {
      this.img = new Image();
      this.img.onload = () => {
        this.loaded();
      };
      this.img.src = "/images/sheep.png";
    }
  }

  resize(stageWidth: number, stageHeight: number): void {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  private loaded(): void {
    this.isLoaded = true;
    this.addSheep();
  }

  private addSheep(): void {
    if (this.img) {
      this.items.push(new Sheep(this.img, this.stageWidth));
    }
  }

  draw(ctx: CanvasRenderingContext2D, t: number, dots: SheepPoint[]): void {
    if (this.isLoaded) {
      this.cur += 1;
      if (this.cur > 200) {
        this.cur = 0;
        this.addSheep();
      }

      for (let i = this.items.length - 1; i >= 0; i--) {
        const item = this.items[i];
        if (item.x < -item.sheepWidth) {
          // sheepWidth 속성에 접근
          this.items.splice(i, 1);
        } else {
          item.draw(ctx, t, dots);
        }
      }
    }
  }
}
