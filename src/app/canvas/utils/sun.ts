import { SunPoint } from "../types/point";

export class Sun {
  private radius = 200;
  private total = 60;
  private gap = 1 / this.total;
  private fps = 15; // 24
  private fpsTime = 1000 / this.fps;

  private originPos: SunPoint[] = [];
  private pos: SunPoint[] = [];
  private time: number | null = null;
  private x: number;
  private y: number;

  constructor() {
    const initialPos = Array.from({ length: this.total }, (_, i) =>
      this.getCirclePoint(this.radius, this.gap * i)
    );
    this.originPos = initialPos;
    this.pos = initialPos;
    this.x = 0;
    this.y = 0;
  }

  resize(stageWidth: number, stageHeight: number) {
    this.x = stageWidth - this.radius - 140;
    this.y = this.radius + 100;
  }

  draw(ctx: CanvasRenderingContext2D, t: number) {
    if (!this.time) {
      this.time = t;
    }

    const now = t - this.time;
    if (now > this.fpsTime) {
      this.time = t;
      this.updatePoints();
    }

    ctx.fillStyle = "#ffb200";
    ctx.beginPath();
    let pos = this.pos[0];
    ctx.moveTo(pos.x + this.x, pos.y + this.y);
    for (let i = 1; i < this.total; i++) {
      pos = this.pos[i];
      ctx.lineTo(pos.x + this.x, pos.y + this.y);
    }
    ctx.fill();
  }

  private updatePoints() {
    this.pos = this.originPos.map((pos) => ({
      x: pos.x + this.ranInt(-5, 5),
      y: pos.y + this.ranInt(-5, 5),
    }));
  }

  private ranInt(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private getCirclePoint(radius: number, t: number): SunPoint {
    const theta = Math.PI * 2 * t;
    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
    };
  }
}

export default Sun;
