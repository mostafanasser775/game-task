import Phaser from "phaser";
import { loadAssets } from "../gameFunctions/loadassets";
const gameState = {}
export class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadingScene' });
    }

    preload() {
        loadAssets(this)
        gameState.progressbaroutline = this.add.rectangle(402, 384, 450, 32).setStrokeStyle(1, 0xffffff).setDepth(11);
        gameState.progressbar = this.add.rectangle(402 - 230, 384, 4, 28, 0xffffff).setDepth(12);
    }
    create() {
        this.add.image(400, 300, "background").setScale(1.5);
        this.add.image(400, 300, "Loading").setScale(0.1);
        setTimeout(() => {
            this.scene.start('GameScene');

        }, 3000); 
    }
    update() {

        if (gameState.progressbar.width <= 450) {
            gameState.progressbar.width += 4;

        }

    }
  
}