import React, { useState } from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import Timer from "../COMPONENTS/ui/timer"



const Promodo = () => {

    const [timerVisibilty,setTimerVisibilty] = useState(false);

    const handletimer = () => {
        setTimerVisibilty(true);
    }
    return (
        <div className='Promodo container'>
            <SideNavBar />
            <div className='promodo-page'>
                <div className='promodo-circle'>
                   { !timerVisibilty && <button onClick={handletimer} className='promodo-btn'>Start</button>}
                   { timerVisibilty && <Timer timeSelected={400} />}

                </div>
            </div>
        </div>
    );
}

export default Promodo;
