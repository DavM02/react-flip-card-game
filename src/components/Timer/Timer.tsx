import React, { useEffect, useState, useContext } from 'react'
import GameContext from '../../context/GameContext';
import './timer.css'
export default function Timer() {

    const [time, setTime] = useState<number>(0)

    const context = useContext(GameContext)

    if (!context) return

    const { isWon, isStarted } = context.statistic

    useEffect(() => {

        let record = setInterval(() => {
            if (isWon === false && isStarted) {
                setTime(prev => prev + 1)

            } else if (isWon) {
                context.setStatistic((prev) => ({
                    ...prev,
                    time
                }))
                setTime(0)
                clearInterval(record)

            } else  {
                context.setStatistic((prev) => ({
                    ...prev,
                    time: 0
                }))
                setTime(0)
                clearInterval(record)

            }

        }, 1000);

        return () => {
            clearInterval(record)
        }
    }, [isWon, isStarted])


    return (
        <div className='timer'>
            <h1>{time}</h1>
        </div>
    )
}
