import { createContext } from "react";

export type Level = "easy" | "medium" | "hard";

export interface GameConfig {
    level: Level;
    character: string | null;
    pairNumber: number;
    restartConfig: {
        restart: boolean;
        level: Level;
        pairNumber: number;
    };
 
}

export interface Statistic {
    isWon: boolean,
    attempts: number,
    correctAttempts :number,
    time: number,
    isStarted: boolean,
}

const GameContext = createContext < {
    gameConfig: GameConfig;
    statistic: Statistic;
    setStatistic: React.Dispatch<React.SetStateAction<Statistic>>;
    setGameConfig: React.Dispatch<React.SetStateAction<GameConfig>>;
    resetGame: () => void
} | null>(null);

export default GameContext;
