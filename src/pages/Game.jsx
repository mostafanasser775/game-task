import { Link } from "react-router-dom";
import PhaserGame from "../components/game";

export default function Game() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Phaser Game</h1>
      <PhaserGame />
      <Link to="/finish" className="mt-4 bg-white text-red-500 px-6 py-2 rounded-lg">
        Finish Game
      </Link>
    </div>
  );
}
