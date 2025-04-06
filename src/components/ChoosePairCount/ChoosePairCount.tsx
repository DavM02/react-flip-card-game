import GameContext from "../../context/GameContext";
import MainButton from "../ui/Button/MainButton";
import { useContext } from "react";
import './choosePair.css'

export default function ChoosePairCount() {
    const context = useContext(GameContext)

    if (!context) return

    const { pairNumber } = context.gameConfig
    const { isStarted } = context.statistic
 
      
    function handlePairChange(pairNumber: number): void {
        if (!isStarted) {
            context?.setGameConfig((prev) => ({
                ...prev, pairNumber,
                restartConfig: {
                    ...prev.restartConfig,
                    pairNumber
                } }))
        } else {
            context?.setGameConfig((prev) => ({
                ...prev,
                restartConfig: {
                    ...prev.restartConfig,
                    restart: true,
                    pairNumber
                }
            }))
            
        }
    
      }

    return <>
        <h3>Pair count:</h3>
        <div className="choose-pair-count">
            <MainButton
                onClick={() => handlePairChange(2)}
                type="button"
                colorVariant="green"
                isActive={pairNumber === 2}
            >
                2
            </MainButton>
            <MainButton
                onClick={() => handlePairChange(3)}
                type="button"
                colorVariant="yellow"
                isActive={pairNumber === 3}
            >
                3
            </MainButton>
            <MainButton
                onClick={() => handlePairChange(4)}
                type="button"
                colorVariant="red"
                isActive={pairNumber === 4}
            >
                4
            </MainButton>
        </div>
    </>
}