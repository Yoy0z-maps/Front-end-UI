import { SheepPoint } from "../types/point";

export class Sheep {
  private totalFrame = 8;
  private curFrame = 0;
  private imgWidth = 360;
  private imgHeight = 300;
  public sheepWidth = 180;
  private sheepHeight = 150;
  private sheepWidthHalf = this.sheepWidth / 2;
  private fps = 24;
  private fpsTime = 1000 / this.fps;

  private img: HTMLImageElement;
  public x: number;
  private y: number;
  private speed: number;
  private time: number | null = null;

  constructor(img: HTMLImageElement, stageWidth: number) {
    this.img = img;
    this.x = stageWidth + this.sheepWidth;
    this.y = 0;
    this.speed = Math.random() * 2 + 1;
  }

  draw(ctx: CanvasRenderingContext2D, t: number, dots: SheepPoint[]) {
    if (this.time === null) {
      this.time = t;
    }

    const now = t - this.time;
    if (now > this.fpsTime) {
      this.time = t;
      this.curFrame += 1;
      if (this.curFrame === this.totalFrame) {
        this.curFrame = 0;
      }
    }
    this.animate(ctx, dots);
  }

  animate(ctx: CanvasRenderingContext2D, dots: SheepPoint[]) {
    this.x -= this.speed;
    const closest = this.getY(this.x, dots);
    this.y = closest.y;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(closest.rotation);
    ctx.drawImage(
      this.img,
      this.imgWidth * this.curFrame,
      0,
      this.imgWidth,
      this.imgHeight,
      -this.sheepWidthHalf,
      -this.sheepHeight + 20,
      this.sheepWidth,
      this.sheepHeight
    );
    ctx.restore();
  }

  getY(x: number, dots: SheepPoint[]) {
    for (let i = 1; i < dots.length; i++) {
      if (x >= dots[i].x1 && x <= dots[i].x3) {
        return this.getY2(x, dots[i]);
      }
    }
    return { y: 0, rotation: 0 };
  }

  getY2(x: number, dot: SheepPoint) {
    const total = 200;
    let pt = this.getPointOnQuad(
      dot.x1,
      dot.y1,
      dot.x2,
      dot.y2,
      dot.x3,
      dot.y3,
      0
    );
    let prevX = pt.x;
    for (let i = 0; i < total; i++) {
      const t = i / total;
      pt = this.getPointOnQuad(
        dot.x1,
        dot.y1,
        dot.x2,
        dot.y2,
        dot.x3,
        dot.y3,
        t
      );
      if (x >= prevX && x <= pt.x) {
        return pt;
      }
      prevX = pt.x;
    }
    return pt;
  }

  getQuadValue(p0: number, p1: number, p2: number, t: number) {
    return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
  }

  getPointOnQuad(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    t: number
  ) {
    const tx = this.quadTangent(x1, x2, x3, t);
    const ty = this.quadTangent(y1, y2, y3, t);
    const rotation = -Math.atan2(tx, ty) + (90 * Math.PI) / 180;

    return {
      x: this.getQuadValue(x1, x2, x3, t),
      y: this.getQuadValue(y1, y2, y3, t),
      rotation: rotation,
    };
  }

  quadTangent(a: number, b: number, c: number, t: number) {
    return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
  }
}
