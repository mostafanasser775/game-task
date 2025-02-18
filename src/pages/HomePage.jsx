import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to Task Game </h1>
            
            {/* GitHub Link */}
            <a 
                href="https://github.com/mostafanasser775/game-task" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 underline mb-4 text-xl hover:text-blue-300"
            >
                View on GitHub
            </a>

            {/* Play Game Button */}
            <Link to="/game">
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-xl">
                    Play Game 🎮
                </button>
            </Link>
        </div>
    );
}
