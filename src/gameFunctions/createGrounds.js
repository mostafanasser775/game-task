import { GlobalVariables } from "../game/GlobalVariables";

export function createGrounds(scene, dropZones) {
    const positions = GlobalVariables.groundPositions

    positions.forEach((pos, index) => {
        // Create ground with 0 scale (hidden at first)
        const ground = scene.add.image(pos.x, pos.y - 40, pos.ground)
            .setScale(0)
            .setAlpha(0);

        if (pos.tree) {
            const tree = scene.add.image(pos.x+10, pos.y - 110, pos.tree).setScale(0.06).setAlpha(0);
            scene.tweens.add({
                targets: tree,
                scale: 0.33,
                alpha: 1,
                duration: 500,
                delay: index * 100,
                ease: "Back.Out",
            });

        }
        // Animate the ground appearing
        scene.tweens.add({
            targets: ground,
            scale: 0.6,
            alpha: 1,
            duration: 500,
            delay: index * 100,
            ease: "Back.Out",
        });

        // Create drop zone
        const dropZone = scene.add.zone(pos.x, pos.y  - 40, ground.width * 0.5, ground.height * 0.5)
            .setRectangleDropZone(ground.width * 0.5, ground.height * 0.5);

        dropZone.associatedGround = ground; // Link ground to drop zone
        if (!pos.tree)
            dropZones.push({ dropZone, planted: false });
    });
}
