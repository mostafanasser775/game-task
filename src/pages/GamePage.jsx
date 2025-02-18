import PhaserGame from "../game/PhaserGame"
export function GamePage() {
    return (
        <div>
            <div className="flex h-screen w-screen bg-slate-500 justify-center items-center">
                    <div className="w-[800px] h-[600px] flex justify-center items-center bg-gray-800 rounded-lg shadow-lg">
                        <PhaserGame />
                    </div>
                </div>
        </div>
    )
}