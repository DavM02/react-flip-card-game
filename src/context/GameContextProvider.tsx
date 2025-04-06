import React, { ReactNode, useState } from "react";
import GameContext, { Statistic } from "./GameContext";
import { GameConfig } from "./GameContext";

const GameContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
 
    const [gameConfig, setGameConfig] = useState<GameConfig>({
        level: "easy",  
        character: null,
        pairNumber: 2,
        restartConfig: {
            restart: false,
            pairNumber: 2,
            level: 'easy'
        },
     
    });


    const [statistic, setStatistic] = useState<Statistic>({
        isWon: false,
        attempts: 0,
        correctAttempts: 0,
        time: 0,
        isStarted: false,
    })


    function resetGame() {
        setGameConfig((prev) => ({
            level: prev.level,
            character: null,
            pairNumber: prev.pairNumber,
            restartConfig: {
                restart: false,
                pairNumber: 2,
                level: 'easy'
            },
        }))
        setStatistic({
            isWon: false,
            attempts: 0,
            correctAttempts: 0,
            time: 0,
            isStarted: false,
        })
    }

    return (
        <GameContext.Provider value={{ gameConfig, setGameConfig, resetGame, statistic, setStatistic  }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameContextProvider;
