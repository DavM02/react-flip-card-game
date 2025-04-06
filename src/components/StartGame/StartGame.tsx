import "./startGame.css";
import React, { useState, useContext } from "react";
import MainButton from "../ui/Button/MainButton";
import Portal from "../ui/Portal/Portal";
import ChooseCharacter from "../ChooseCharacter/ChooseCharacter";
import { AnimatePresence } from "framer-motion";
import GameContext from "../../context/GameContext";
 

const StartGame: React.FC = () => {

  const context = useContext(GameContext)
  if (!context) return
  
  const { isStarted } = context.statistic
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div className="actions">
        <MainButton
          disabled={isStarted}
          onClick={() => setShow(true)}
          colorVariant="blue"
          type="button"
        >
          start game
        </MainButton>
        <MainButton
          onClick={() => context.resetGame()}
          disabled={!isStarted}
          colorVariant="red"
          type="button"
        >
          reset game
        </MainButton>
      </div>
      <Portal>
        <AnimatePresence mode="wait">
          {show && <ChooseCharacter setShow={setShow} />}
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default StartGame;
