import { TextStyle, Text } from 'pixi.js';
import { theme } from 'src/constant/theme';

interface IButtonTextProps {
  text: string;
  x?: number;
  y?: number;
  resolution?: number;
  containerWidth: number;
  containerHeight: number;
  zIndex: number;
}

const textStyle = new TextStyle({
  fill: 0x000000,
  fontSize: theme.fontSize,
  fontFamily: theme.fontFamily,
  fontWeight: 'bold',
});

class ButtonText extends Text {
  constructor({
    text,
    x = 0,
    y = 0,
    resolution = 2,
    containerWidth,
    containerHeight,
    zIndex,
  }: IButtonTextProps) {
    super({
      text: text,
      style: textStyle,
      anchor: 0.5,
      x: x + containerWidth / 2,
      y: y + containerHeight / 2,
      zIndex,
      resolution,
    });
  }
}

export default ButtonText;
