import { useState, useEffect } from 'react';

function getTime() {
    var newDate = new Date();
    var achiveDate = new Date(2022,0,1,0,0,0);
    var t = (achiveDate - newDate)+1000;
    if (t < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    return {
        seconds,
        minutes,
        hours,
        days
    }
}

export const useTimeLeft = () =>{
    const [timeParams, setTimeParams] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(()=>{
        const interval = setInterval(()=>{
            const newTimeParams = getTime();
            setTimeParams(newTimeParams)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })

    return timeParams
}
