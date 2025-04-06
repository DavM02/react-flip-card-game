import React, { useContext } from "react";
import GameContext from "../../context/GameContext";
import "./board.css";
import { useGameLogic } from "../../hooks/useGameLogic";
import Card from "./Card";

const Board: React.FC = () => {
  const context = useContext(GameContext);
  if (!context) return null;

  const { level, character, pairNumber,  } = context.gameConfig;
  const { isStarted } = context.statistic

  const {
    images,
    selected,
    flipped,
    matches,
    adjustTransition,
    setSelected,
    numberOfCells,
    setAdjustTransition,
  } = useGameLogic(level, character, pairNumber);

  const cells = Array.from({ length: numberOfCells }, (_, i) => i);

  return (
    <div className={`board ${level}`}>
      <ul>
        {cells.map((el, i) => {
          const img = images?.[i];
          const parts = img?.split("/");
          const path = parts?.[parts.length - 1] || "";
          const matched = matches.includes(i);
          const isFlipped = flipped.includes(i) || matched;
          const isSelected = selected.some((sel) => sel.i === i);
 
    
          return (
            <Card
              key={i}
              i={i}
              img={img || ""}
              isStarted={isStarted}
              isFlipped={isFlipped}
              isMatched={matched}
              isSelected={isSelected}
              onClick={() => {
                if (!adjustTransition) {
                  setAdjustTransition(true);
                }

                if (
                  selected.find((sel) => sel.i === i) ||
                  matches.includes(i) ||
                  selected.length === pairNumber
                )
                  return;

                setSelected((prev) => [...prev, { i, path }]);
              }}
              adjustTransition={adjustTransition}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Board;
