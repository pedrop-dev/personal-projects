/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './style/pomodoro.css'

export default function Pomodoro() {
    //UseStates

    //workTime
    const [workTime, setWorkTime] = useState(25)
    //restTime
    const [restTime, setRestTime] = useState(5)
    //minutes
    const [minutes, setMinutes] = useState(workTime)
    //seconds
    const [seconds, setSeconds] = useState(0)
    //isActive
    const [isActive, setIsActive] = useState(false)
    //isRest
    const [isRest, setIsRest] = useState(false)

    //UseEffect - Updates the timer every second while timer is active
    useEffect(() => {
        let interval = null

        if (isActive) {
            interval = setInterval (() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setIsRest(!isRest)
                        if (isRest) {
                            setMinutes(workTime)
                        } else {
                            setMinutes(restTime)
                        }
                    } else {
                        setMinutes(minutes - 1)
                        setSeconds(59)
                    }
                } else {
                    setSeconds(seconds - 1)
                }
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isActive, minutes, seconds, isRest, workTime, restTime])

    //Toggle timer function 
    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    //Reset timer function
    const resetTimer = () => {
        setIsActive(false)
        setIsRest(false)
        setMinutes(workTime)
        setSeconds(0)
    }
    
    return (
        <main 
        className="
            h-2/3 w-11/12 
            sm:h-4/6 sm:w-4/5
            md:h-4/6 md:w-3/5
            xl:h-5/6 xl:w-2/4
            absolute 
            top-2/4 left-2/4 
            transform -translate-x-1/2 -translate-y-2/4 
            rounded-lg
            bg-purple
            shadow-lg"
        >
            <h1 className='text-5xl xl:text-6xl text-white font-sans font-semibold text-center text-black mt-6'>
                Pomodoro Timer
            </h1>
            <div className="w-full flex justify-center mt-36 xl:mt-56">
                <span className='text-8xl text-white font-sans font-semibold text-center text-black '>
                    {minutes.toString().padStart(2, '0')}:
                </span>

                <span className='text-8xl text-white font-sans font-semibold text-center text-black'>
                    {seconds.toString().padStart(2, '0')}
                </span>
            </div>

            <div 
                className='
                w-full 
                flex justify-around 
                mt-20'
            >
                <button onClick={toggleTimer} className='h-12 md:h-14  xl:h-16 w-2/5  rounded-md cursor-pointer bg-lpurple hover:bg-hpurple ease-in-out delay-150 duration-300 text-2xl text-white font-sans'>
                    {isActive ? 'Pause' : 'Start'}
                </button>

                <button onClick={resetTimer} className='h-12 md:h-14 xl:h-16 w-2/5 rounded-md cursor-pointer bg-lpurple hover:bg-hpurple ease-in-out delay-200 text-2xl text-white font-sans'>
                    Reset
                </button>
            </div>
        </main>
    )
}