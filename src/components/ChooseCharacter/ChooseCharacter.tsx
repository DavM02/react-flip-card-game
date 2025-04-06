import React, { useContext } from "react";
import GameContext from "../../context/GameContext";
import SmoothWrapper from "../ui/SmoothWrapper/SmoothWrapper";
import './chooseCharacter.css'
import { characters } from "./Characters";
import MainButton from "../ui/Button/MainButton";


interface ChooseCharacterProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChooseCharacter({ setShow }: ChooseCharacterProps) {
    const context = useContext(GameContext);

    if (!context) return null;

    const { level, pairNumber } = context.gameConfig;
    const availableCharacters = characters[level];

    return (
        <>
            <SmoothWrapper className="modal choose-character">
                <h3>Level: {level.toUpperCase()}. Pairs: {pairNumber}. Choose a character:</h3>
                <ul className="character-list">
                    {Object.entries(availableCharacters).map(([key, img]) => (
                        <li key={key} onClick={() => {
                            context.setStatistic((prev) => ({...prev, isStarted: true}))
                            context.setGameConfig((prev) => ({ ...prev, character: key}))
                            setShow(false)
                        }}>
                            <img src={img} alt={key} />
                        </li>
                    ))}
                </ul>
                <MainButton
                    onClick={() => setShow(false)}
                    type="button" colorVariant="yellow"
                >
                    go back
                </MainButton>
            </SmoothWrapper>
            <SmoothWrapper className="overlay" />
        </>
    );
}
