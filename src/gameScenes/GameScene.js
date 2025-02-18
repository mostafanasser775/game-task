import Phaser from "phaser";
import { createSeedIcon } from "../gameFunctions/createSeedIcon";
import { GlobalVariables } from "../game/GlobalVariables";
import { createText } from "../gameFunctions/createText";
import { createGrounds } from "../gameFunctions/createGrounds";
import { loadAssets } from "../gameFunctions/loadassets";
import { createHouse } from "../gameFunctions/createHouse";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }

    preload() {
        loadAssets(this);
    }

    create() {
        this.add.image(400, 300, "background").setScale(1.5);
        this.add.rectangle(400, 50, 800, 100, 0x777770).setDepth(10);

        for (let i = 0; i < GlobalVariables.seedCount; i++) {
            createSeedIcon(this, 100, 50);
        }

        const textObjects = createText(this);
        createHouse(this);

        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            if (gameObject.texture.key === "ground") {
                gameObject.x = dragX;
                gameObject.y = dragY;
            } else {
                gameObject.x = dragX;
                gameObject.y = dragY;
                gameObject.setAlpha(0.5);
            }
        });

        const dropZones = [];
        createGrounds(this, dropZones);

        this.input.on("dragend", (pointer, gameObject) => {
            for (const zone of dropZones) {
                if (!zone.planted && Phaser.Geom.Rectangle.Contains(zone.dropZone.getBounds(), gameObject.x, gameObject.y)) {
                    if (gameObject.texture.key === "seed") {
                        this.sound.play("success");

                        this.tweens.add({
                            targets: gameObject, alpha: 0, scale: 0, duration: 500,
                            onComplete: () => gameObject.destroy(),
                        });

                        const plant = this.add.image(zone.dropZone.x, zone.dropZone.y - 20, "plant").setScale(0);
                        this.tweens.add({
                            targets: plant, scale: 0.05, alpha: 1, duration: 700,
                            onComplete: () => {
                                GlobalVariables.seedCount--;
                                GlobalVariables.score += 10;
                                textObjects.updateSeedCount();
                                textObjects.updateScore();
                            }
                        });

                        const ground = zone.dropZone.associatedGround;
                        if (ground) {
                            this.tweens.add({
                                targets: ground, alpha: 0, duration: 500, onComplete: () => ground.destroy()
                            });
                        }

                        zone.planted = true;
                        return;
                    }
                }
            }

            if (gameObject.texture.key === "seed") {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                gameObject.setAlpha(1);
                this.sound.play("fail");
            }
        });
    }
}
