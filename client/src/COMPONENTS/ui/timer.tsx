import React from 'react';
import { useTimer } from 'react-timer-hook';


import {TimerPauseIcon} from "./icons";
import {TimerStartIcon} from "./icons";
import {RotateLeftIcon} from "./icons";

interface TimerProps {
    timeSelected: number;
}

const Timer : React.FC<TimerProps> = ({ timeSelected }) =>  {

    const time = new Date();
    time.setSeconds(time.getSeconds() + timeSelected);

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp: time, onExpire: () => console.warn('onExpire called') });


    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    
    return (
        <div className='timer'>
            <h1 className='timer-heading'><span>{formattedHours}</span>:<span>{formattedMinutes}</span>:<span>{formattedSeconds}</span></h1>
            <div className='timer-buttons'>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => restart}><RotateLeftIcon /></button>
                <button onClick={isRunning ? pause : undefined}  disabled={!isRunning}><TimerPauseIcon /></button>
                <button onClick={!isRunning ? resume : undefined} disabled={isRunning}><TimerStartIcon /></button>
            </div>
            
        </div>
    );
}

export default Timer;
