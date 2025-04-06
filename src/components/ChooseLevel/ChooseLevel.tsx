import React, { useContext } from "react";
import MainButton from "../ui/Button/MainButton";
import "./chooseLevel.css";
import GameContext from "../../context/GameContext";
import { Level } from "../../context/GameContext";

const ChooseLevel: React.FC = () => {

  const context = useContext(GameContext)


  if (!context) return
  const { level } = context.gameConfig

  const { isStarted } = context.statistic

  function handleLevelChange(level: Level): void {
    if (!isStarted) {
      context?.setGameConfig((prev) => ({
        ...prev, level,
        restartConfig: {
          ...prev.restartConfig,
          level
        }
      }))
    } else {
      context?.setGameConfig((prev) => ({
        ...prev,
        restartConfig: {
          ...prev.restartConfig,
          restart: true,
          level
        }
      }))
    }


  }

  return (
    <div className="choose-level">
      <MainButton
        isActive={level === "easy"}
        onClick={() => handleLevelChange("easy")}
        type="button"
        colorVariant="green"
      >
        easy
      </MainButton>
      <MainButton
        isActive={level === "medium"}
        onClick={() => handleLevelChange("medium")}
        type="button"
        colorVariant="yellow"
      >
        medium
      </MainButton>
      <MainButton
        isActive={level === "hard"}
        onClick={() => handleLevelChange("hard")}
        type="button"
        colorVariant="red"
      >
        hard
      </MainButton>
    </div>
  );
};

export default ChooseLevel;
