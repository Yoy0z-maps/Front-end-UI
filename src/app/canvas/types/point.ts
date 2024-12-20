export interface Point {
  x: number;
  y: number;
}

export interface SunPoint extends Point {}

export interface SheepPoint extends Point {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
}
