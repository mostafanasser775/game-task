
export function createSeedIcon(scene, count, x, y) {

    const seedIcon = scene.add.image(x, y, "seed")
        .setScale(0.08)
        .setInteractive()
        .setDepth(10);

    scene.input.setDraggable(seedIcon);
    if (count === 1) {
         seedIcon.disableInteractive();
         seedIcon.setAlpha(0.5); 
    }

    return seedIcon;
}