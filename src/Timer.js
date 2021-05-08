import React from 'react';
import './timer.css';


function Timer({days,hours,minutes,seconds}){

    return(
        <div className="flex-container">
            <div className="timer line">
                <h1 className="num">{days}</h1><p>Days</p>
            </div>
            <div className="timer line">
                <h1 className="num" >{hours}</h1><p>Hours</p>
            </div>
            <div className="timer line">
                <h1 className="num" >{minutes}</h1><p>Minutes</p>
            </div>
            <div className="timer">
                <h1 className="num" >{seconds}</h1><p>Seconds</p>
            </div>
        </div>
    )
}

export default Timer;