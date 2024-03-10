// @ts-nocheck

import { Text } from 'pixi.js'
import { Sprite } from 'pixi.js'
import { Texture } from 'pixi.js'
import { Container } from 'pixi.js'
import { Button } from './widget'

export class BunnyDemo {
    constructor() {
        this.view = new Button({
            text: 'Hello',
            width: 100,
            height: 50,
            radius: 10,
            bgColor: '0x0000ff',
            fgColor: '0xffffff'
        })
        // this.view = new Container()
        // new Button(this.view)

        // // Create a new texture
        // const texture = Texture.from('bunny.png');
        // const numBunnies = bunnySize * bunnySize;

        // for (let i = 0; i < numBunnies; i += 1) {
        //     const bunny = new Sprite(texture);
        //     bunny.buttonMode = true;
        //     bunny.interactive = true;
        //     bunny.x = (i % bunnySize) * bunnySpacing;
        //     bunny.y = Math.floor(i / bunnySize) * bunnySpacing;
        //     this.view.addChild(bunny);
        // }

        // // Center bunny sprite in local container coordinates
        // this.view.pivot.x = this.view.width / 2;
        // this.view.pivot.y = this.view.height / 2;
    }

    resize(w, h) {
        this.view.x = w / 2;
        this.view.y = h / 2;
    }

    update(delta) {
        this.view.rotation -= 0.01 * delta;
    }

    destroy() {
        this.view.destroy(true);
    }
}

export default {
    title: 'Atoms/Button',
}

export const Default = () => new BunnyDemo();

// export const Default = () => {
//     return new class {
//         private view: Button

//         constructor() {
//             const widget = new Button()
//             this.view = widget.view
//         }

//         resize(w, h) {
//             this.view.x = w / 2;
//             this.view.y = h / 2;
//         }

//         update(delta) {
//             this.view.rotation -= 0.01 * delta;
//         }

//         destroy() {
//             this.view.destroy(true);
//         }
//     }
// }
