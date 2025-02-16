import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Game</h1>
      <Link to="/game" className="bg-white text-blue-500 px-6 py-2 rounded-lg">
        Start Game
      </Link>
    </div>
  );
}
