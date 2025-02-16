import { create } from "zustand";

const useGameStore = create((set) => ({
  playerPosition: { x: 50, y: 50 }, // Default position
  speed: 10, // Movement speed
  movePlayer: (dx, dy) =>
    set((state) => ({
      playerPosition: {
        x: state.playerPosition.x + dx,
        y: state.playerPosition.y + dy,
      },
    })),
  resetGame: () =>
    set({ playerPosition: { x: 50, y: 50 } }),
}));

export default useGameStore;
