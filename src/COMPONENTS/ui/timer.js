import React from 'react';
import { useTimer } from 'react-timer-hook';

import pause_icon from "../../ASSETS/vuesax/linear/pause-icon.svg";
import restart_icon from "../../ASSETS/rotate-left-icon.svg";
import play_icon from "../../ASSETS/arrow-right-icon.svg"

const Timer = ({timeSelected}) => {

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
                <button onClick={restart}><img src={restart_icon}/></button>
                <button onClick={isRunning ? pause : ""}  disabled={!isRunning}><img src={pause_icon}/></button>
                <button onClick={!isRunning ? resume : ""} disabled={isRunning}><img src={play_icon}/></button>
            </div>
            
        </div>
    );
}

export default Timer;
