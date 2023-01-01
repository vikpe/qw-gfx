import * as PIXI from "pixi.js";
import { Brush } from "./types";
import { string2hex } from "@pixi/utils";

export class Cursor extends PIXI.Graphics {
  constructor() {
    super();
  }

  toCss(renderer: PIXI.IRenderer, brush: Brush): string {
    console.log("toCss", brush);
    this.clear();

    const sideLength = brush.size / 2;

    this.lineStyle(2, string2hex(brush.color));

    if (brush.shape === "circle") {
      this.drawCircle(0, 0, sideLength);
    } else if (brush.shape === "square") {
      this.drawRect(0, 0, brush.size, brush.size);
    }

    const cursorCanvas = renderer.plugins.extract.canvas(this);

    return `url(${cursorCanvas.toDataURL()}) ${sideLength} ${sideLength}, auto`;
  }
}