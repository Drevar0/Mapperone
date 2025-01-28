import { Graphics } from 'pixi.js';

class BaseButtonGraphics extends Graphics {
  styleBase(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    this.roundRect(x, y, width, height, radius)
      .fill(0xfbfbf9)
      .stroke({ color: 0xd8d8d1, width: 2 });
  }

  styleHover(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    this.roundRect(x, y, width, height, radius).fill(0xffffff).stroke({
      color: 0xd8d8d1,
      width: 3,
    });
  }
}

export default BaseButtonGraphics;
