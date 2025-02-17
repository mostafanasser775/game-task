import { GlobalVariables } from '../game/GlobalVariables';

export function createText(scene) {
    const seedCounterText = scene.add.text(600, 30, `Seeds: ${GlobalVariables.seedCount}`, {
        fontSize: "24px",
        fill: "#fff",
    }).setDepth(11);

    const scoreText = scene.add.text(600, 60, `Score: ${GlobalVariables.score}`, {
        fontSize: "24px",
        fill: "#fff",
    }).setDepth(11);

    return {
        seedCounterText,
        scoreText,
        updateSeedCount: () => seedCounterText.setText(`Seeds: ${GlobalVariables.seedCount}`),
        updateScore: () => scoreText.setText(`Score: ${GlobalVariables.score}`)
    };
}
