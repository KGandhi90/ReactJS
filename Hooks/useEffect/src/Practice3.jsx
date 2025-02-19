// Countdown Timer

import { useState, useEffect } from 'react';

const Practice3 = () => {
    const[time, setTime] = useState(10);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);

        
    }, [time])
    return(
        <div>{time}</div>
    )
}

export default Practice3;