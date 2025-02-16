import { Link } from "react-router-dom";

export default function Finish() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Game Over</h1>
      <Link to="/" className="bg-white text-red-500 px-6 py-2 rounded-lg">
        Restart
      </Link>
    </div>
  );
}
