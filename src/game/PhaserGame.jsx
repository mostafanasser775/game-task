import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { StartScene } from "../gameScenes/StartScene"; // Import the start scene
import { GameScene } from "../gameScenes/GameScene"; // Move the existing game logic here
export default function PhaserGame() {
    const gameContainer = useRef(null);

    useEffect(() => {
        if (!gameContainer.current) return;

        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 660,
            parent: gameContainer.current,
            scene: [StartScene, GameScene], // Add both scenes
        };

        const game = new Phaser.Game(config);
        game.scene.start("StartScene"); // Start the start scene

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainer} className="w-full h-screen bg-black"></div>;
}
