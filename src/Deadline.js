import React from 'react';

function Deadline({date}){
    return(
        <div className="deadline" ><h2>{`Timer Ends on: ${date}`}</h2></div>
    )
}


export default Deadline;