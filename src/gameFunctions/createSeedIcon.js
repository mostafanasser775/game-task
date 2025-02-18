import { GlobalVariables } from "../game/GlobalVariables";
export function createSeedIcon(scene, x, y) {

    const seedIcon = scene.add.image(x, y, "seed")
        .setScale(0.06)
        .setOrigin(0.5)
        .setInteractive()
        .setDepth(10);

    GlobalVariables.seedCount > 1 &&
        scene.input.setDraggable(seedIcon);

    if (GlobalVariables.seedCount <= 1) {
        seedIcon.setAlpha(0.75); 
        seedIcon.disableInteractive(); 
    }

}