
export function createHouse(scene) {

    const house = scene.add.image(500, 180, "house")
        .setScale(0)
        .setAlpha(0).setDepth(12);

    // Animate the ground appearing
    scene.tweens.add({
        targets: house,
        scale: 0.33,
        alpha: 1,
        duration: 500,
        delay: 900,
        ease: "Back.Out",
    });



}
