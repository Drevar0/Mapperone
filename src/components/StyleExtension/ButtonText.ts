import { TextStyle, Text } from 'pixi.js';
import { theme } from '../../shared/constant/theme';

interface IButtonTextProps {
  text: string;
  containerWidth: number;
  containerHeight: number;
}

const textStyle = new TextStyle({
  fill: 0x000000,
  fontSize: theme.fontSize,
  fontFamily: theme.fontFamily,
  fontWeight: 'bold',
});

class ButtonText extends Text {
  constructor({ text, containerWidth, containerHeight }: IButtonTextProps) {
    super({
      text: text,
      style: textStyle,
      anchor: 0.5,
      x: containerWidth / 2,
      y: containerHeight / 2,
    });
  }
}

export default ButtonText;
