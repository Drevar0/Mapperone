import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export const bottomTollbar = () => {
    const container = new Container();
    const addNodeButton = new Graphics();

    addNodeButton
        .roundRect(0, 0, 70, 40, 5)
        .fill(0xeeedd7);

    const textStyle = new TextStyle({
        fontSize: 12,
        stroke: "#000000",
    });
    const text = new Text({
        text: "Add Node",
        style: textStyle
    });


    addNodeButton.addChild(text);
    container.addChild(addNodeButton);

    container.pivot.set(container.width,container.height);
    container.position.set(window.innerWidth-5, window.innerHeight-5);
    container.zIndex = 1000;
    return container;
}