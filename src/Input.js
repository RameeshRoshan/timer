import React from 'react';


function Input({onclick,onchange}){

    return(
        <div>
            <input className="read" onChange={onchange}placeholder="MM-DD-YYYY,HH:MM"></input>
            <button className="read" onClick={onclick}>Start Timer</button>
        </div>
    )
}


export default Input;