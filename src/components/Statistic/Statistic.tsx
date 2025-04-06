import React, { useContext } from 'react'
import './statistic.css'
import Portal from '../ui/Portal/Portal'
import SmoothWrapper from '../ui/SmoothWrapper/SmoothWrapper'
import { AnimatePresence } from 'framer-motion'
import GameContext from '../../context/GameContext'
import MainButton from '../ui/Button/MainButton'
import { characters } from '../ChooseCharacter/Characters'
export default function Statistic() {

    const context = useContext(GameContext)
    if (!context) return



    const { isWon, time, attempts, correctAttempts } = context.statistic
    const { character, level } = context.gameConfig

    return (
        <Portal>
            <AnimatePresence mode='wait'>
                {
                    isWon && time && <>
                        
                        <SmoothWrapper className='modal statistis'>
                            <div className='image'>
                                <img
                                    src={characters[level]?.[`character-${character?.split("-")[1]}` as keyof typeof characters[typeof level]]}
                                    alt="character"
                                />
                            </div>

                            <h2>Congratulations! You won the game {`<3`}</h2>
                            <p>Game Duration: {time}s</p>
                            <p>Total Attempts: {attempts}</p>
                            <p>Accurancy: {Math.round((correctAttempts / attempts) * 100)}%</p>

                            <MainButton
                                type='button'
                                onClick={() => context.resetGame()}
                                colorVariant='violet'>
                               play again
                             </MainButton>
                             
                        </SmoothWrapper>
                        <SmoothWrapper className='overlay'/>
                    </>
                }
            </AnimatePresence>
        </Portal>
    )
}
