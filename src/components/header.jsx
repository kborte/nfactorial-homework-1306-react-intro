import React, { useEffect, useState } from "react";
import { format } from "date-fns/esm";
import "./header.css";
import borte from '../res/icon.png';

function Header(){ 
    let current = new Date();
    let currenttime = format(new Date(), 'dd.MM.yyyy HH:mm');
    const [time, setTime] = useState(currenttime);

    const left = (60 - current.getSeconds());
    
    const tickmin = () => {
        currenttime = format(new Date(), 'dd.MM.yyyy HH:mm');
        setTime(currenttime);
    }

    // useEffect(() => {
    //     console.log('time', current.getMinutes())
    // }, [current.getSeconds()])

    setTimeout(tickmin, left * 1000);
    setInterval(tickmin, 60000);

    return(
        <div className = "header">
            <img className = "image" src = {borte}></img>
            <input type = "text"></input>
            <h5 id = "timedisplay">{time}</h5>
        </div>
    );
}

export default Header;