import { useContext, useEffect, useState, useMemo } from "react";
import GameContext from "../context/GameContext";
import { groupedImages } from "../components/Board/GroupedImages";

type Level = "easy" | "medium" | "hard"

const grid: Record<Level, number> = {
    easy: 16,
    medium: 36,
    hard: 64,
};

interface GameLogicReturn {
    images: string[] | null;
    selected: { i: number; path: string }[];
    flipped: number[];
    matches: number[];
    adjustTransition: boolean;
    setSelected: React.Dispatch<React.SetStateAction<{ i: number; path: string }[]>>;
    setAdjustTransition: React.Dispatch<React.SetStateAction<boolean>>;
    numberOfCells: number
}

export const useGameLogic = (level: Level, character: string | null, pairNumber: number):GameLogicReturn => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("GameContext is not provided");
    }
    const [selected, setSelected] = useState<{ i: number; path: string }[]>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [matches, setMatches] = useState<number[]>([]);
    const [adjustTransition, setAdjustTransition] = useState<boolean>(false);

    const numberOfCells = grid[level];

    const images = useMemo(() => {
        if (!character) return null;
 
        const totalPairs = Math.floor(numberOfCells / pairNumber);
        const sourceImages = groupedImages[level][character].slice(0, totalPairs);
        let repeated = sourceImages.flatMap((img) => Array(pairNumber).fill(img));

        if (repeated.length < numberOfCells) {
            repeated.push("");
        }

        for (let i = repeated.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [repeated[i], repeated[j]] = [repeated[j], repeated[i]];
        }

        return repeated;
    }, [level, character, pairNumber]);

    useEffect(() => {
        if (matches.length === numberOfCells) {
            context.setStatistic((prev) => ({ ...prev, isWon: true }));
        }

        if (selected.length === pairNumber) {
            context.setStatistic((prev) => ({
                ...prev,
                attempts: prev.attempts + 1
            }));

            const allMatch = selected.every((item) => item.path === selected[0].path);
            const indexes = selected.map((item) => item.i);

            setFlipped((prev) => [...prev, ...indexes]);

            const flipBack = setTimeout(() => {
                if (!allMatch) {
                    setFlipped([]);
                } else {
                    setMatches((prev) => [...prev, ...indexes]);

                    if (allMatch) {
                        context.setStatistic((prev) => ({
                            ...prev,
                            correctAttempts: prev.correctAttempts + 1,
                        }));
                    }
                }

                setSelected([]);
            }, 1000);

            return () => clearTimeout(flipBack);
        }
    }, [selected, pairNumber]);

    useEffect(() => {
        setMatches([]);
        setFlipped([]);
        setSelected([]);
        setAdjustTransition(false);
    }, [level, character, pairNumber]);

    return {
        images,
        selected,
        flipped,
        matches,
        adjustTransition,
        setSelected,
        setAdjustTransition,
        numberOfCells: grid[level]
    };
};
