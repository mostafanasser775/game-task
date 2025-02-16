

import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { createSeedIcon } from '../gameFunctions/createSeedIcon'
import { loadAssets } from "../gameFunctions/loadassets";
const GlobalVariables = {
    seedCount: 3
}
export default function PhaserGame() {
    const gameContainer = useRef(null);

    useEffect(() => {
        if (!gameContainer.current) return;

        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: gameContainer.current,
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        function preload() {
            loadAssets(this)
        }

        function create() {
            this.add.image(400, 300, "background").setScale(1.5);

            // Toolbar background
            this.add.rectangle(400, 50, 800, 100, 0x222222).setDepth(10);


            // Display Seed Count on Toolbar
            const seedCounterText = this.add.text(600, 30, `Seeds: ${GlobalVariables.seedCount}`, {
                fontSize: "24px",
                fill: "#fff",
            }).setDepth(11);

            // Seed Icon (Only 1, but count is tracked)

            for (let i = 0; i < GlobalVariables.seedCount + 1; i++) {
                createSeedIcon(this, 3, 150, 50)
            }

            // Drop Zones (Multiple Grounds)
            const dropZones = [];
            const positions = [
                { x: 300, y: 400 },
                { x: 500, y: 400 },
                { x: 400, y: 500 },
            ];

            positions.forEach((pos) => {
                const ground = this.add.image(pos.x, pos.y, "ground").setScale(0.6);
                const dropZone = this.add.zone(pos.x, pos.y, ground.width * 0.6, ground.height * 0.6)
                    .setRectangleDropZone(ground.width * 0.6, ground.height * 0.6);

                dropZones.push({ dropZone, planted: false });
            });

            // Handle Dragging
            this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });

            // Handle Drop
            this.input.on("dragend", (pointer, gameObject) => {
                for (const zone of dropZones) {
                    if (!zone.planted && Phaser.Geom.Rectangle.Contains(zone.dropZone.getBounds(), gameObject.x, gameObject.y)) {

                        this.sound.play("success");

                        this.tweens.add({
                            targets: gameObject, alpha: 0, scale: 0,
                            duration: 500,
                            onComplete: () => gameObject.destroy(),
                        });

                        const plant = this.add.image(zone.dropZone.x, zone.dropZone.y - 20, "plant").setScale(0);
                        this.tweens.add({
                            targets: plant,
                            scale: 0.065,
                            alpha: 1,
                            duration: 700,


                        });

                        zone.planted = true;

                        GlobalVariables.seedCount--;
                        seedCounterText.setText(`Seeds: ${GlobalVariables.seedCount}`);



                        return;
                    }
                }

                // If dropped outside a valid zone, return to toolbar
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                this.sound.play("fail");
            });
        }

        function update() { }

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainer} className="w-full h-screen bg-black"></div>;
}
