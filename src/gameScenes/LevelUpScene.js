import Phaser from "phaser";
import { GlobalVariables } from "../game/GlobalVariables";

export class LevelUpScene extends Phaser.Scene {
    constructor() {
        super({ key: "LevelUpScene" });
    }

    create() {
        this.add.rectangle(400, 300, 800, 600, 0x111111, 0.9);

        const title = this.add.text(400, 220, "🎉 Level Up! 🎉", {
            fontSize: "52px",
            fill: "#ffcc00",
            fontStyle: "bold",
            stroke: "#000",
            strokeThickness: 6,
        }).setOrigin(0.5);

        this.tweens.add({
            targets: title,
            scale: 1.1,
            duration: 500,
            yoyo: true,
            repeat: -1,
        });

        const restartButton = this.add.rectangle(400, 350, 200, 60, 0xffcc00).setInteractive();
        this.add.text(400, 350, "Restart Game", {
            fontSize: "24px",
            fill: "#000",
            fontStyle: "bold",
        }).setOrigin(0.5);

        restartButton.on("pointerover", () => {
            restartButton.setFillStyle(0xffee55);
        });

        restartButton.on("pointerout", () => {
            restartButton.setFillStyle(0xffcc00);
        });

        restartButton.on("pointerdown", () => {
            GlobalVariables.seedCount = 5;
            GlobalVariables.plantedSeeds = 0;
            GlobalVariables.score = 0;
            this.scene.start("GameScene");
        });
    }
}
