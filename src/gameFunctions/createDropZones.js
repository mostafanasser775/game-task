export function createDropZones(scene) {
    const dropZones = [];
    const positions = [
        { x: 300, y: 400 },
        { x: 500, y: 400 },
        { x: 400, y: 500 },
    ];

    positions.forEach((pos) => {
        const ground = scene.add.image(pos.x, pos.y, "ground").setScale(0.6);
        const dropZone = scene.add.zone(pos.x, pos.y, ground.width * 0.6, ground.height * 0.6)
            .setRectangleDropZone(ground.width * 0.6, ground.height * 0.6);

        dropZones.push({ dropZone, planted: false });
    });

    return dropZones;
}
