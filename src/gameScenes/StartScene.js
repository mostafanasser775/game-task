import Phaser from "phaser";
import { loadAssets } from "../gameFunctions/loadassets";
import { createHouse } from "../gameFunctions/createHouse";
import { createGrounds } from "../gameFunctions/createGrounds";

export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartScene" });
    }

    preload() {
        loadAssets(this)
    }

    create() {
        this.add.image(400, 300, "background").setScale(1.5);
        this.sound.play("InGameSound");


        const startButton = this.add.image(400, 600, "startButton")
            .setScale(0.25)
            .setInteractive();

        this.add.text(400, 640, "Start Game", {
            fontSize: "20px",
            fill: "#fff",
        }).setOrigin(0.5);

        createHouse(this)
        const grid = [];
        createGrounds(this, grid)
        

        startButton.on("pointerdown", () => {
            this.scene.start("LoadingScene"); // Switch to the main game scene
        });
    }
}
