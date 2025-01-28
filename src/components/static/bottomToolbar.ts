import { Container, Graphics, Text, TextStyle } from 'pixi.js';
import { getViewport } from '../../shared/Viewport';
import { resetView } from '../../shared/Viewport/resetView';
import Button from '../core/Button';

export const bottomTollbar = () => {
    const container = new Container({
        width: 200,
        height: 80,
    });
    const addNodeButton = new Graphics();
    const textStyle = new TextStyle({
        fontSize: 12,
        stroke: "#000000",
    });

    container.position.set(window.innerWidth-120, window.innerHeight-70);
    container.pivot.set(container.width,container.height);
    container.zIndex = 1000;

    window.addEventListener('resize', () => {
        container.position.set(window.innerWidth-120, window.innerHeight-70);
        container.pivot.set(container.width,container.height);
    });

    // addNodeButton
    //     .roundRect(0, 0, 70, 40, 5)
    //     .fill(0xeeedd7)
    //     .addChild(
    //         new Text({
    //             text: "Add Node",
    //             style: textStyle
    //         })
    //     );

    // const resetViewButton = new Button(
    //     new Graphics()
    //       .roundRect(0, 0, 70, 40, 5)
    //       .fill(0x22ffff)
    //       .addChild(
    //         new Text({
    //             text: "Reset View",
    //             style: textStyle
    //     }))
    //   );
    // resetViewButton.onPress.connect(() => {
    //     resetView(getViewport());
    //   });

    const button = Button({
        text: "Reset View",
        onClick: () => {
                resetView(getViewport());
        }
    });

    container.addChild(button);

    
    return container;
}