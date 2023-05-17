import React, { useEffect, useState } from "react";
import './Stopwatch.css'

const Stopwatch = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if(isRunning){
            intervalId = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 10);
            },10)
        }

        return () => {
            clearInterval(intervalId);
        }
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time / 1000)) % 60;
        const miliseconds = Math.floor((time / 10) % 100);

        return (
            (minutes < 10 ? '0' + minutes : minutes) +
            ':' +
            (seconds < 10 ? '0' + seconds : seconds) +
            '.' +
            (miliseconds < 10 ? '0' + miliseconds : miliseconds)
        )
    }
    
    return (
        <div className="container">
            <h1 className="heading">Stopwatch</h1>
            <p className="elapsed-time">{formatTime(elapsedTime)}</p>
            {!isRunning ? 
                <button className="btn start-button" onClick={handleStart}>Start</button>
                :<button className="btn stop-button" onClick={handleStop}>Stop</button>
            }
            <button className="btn reset-button" onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Stopwatch;

