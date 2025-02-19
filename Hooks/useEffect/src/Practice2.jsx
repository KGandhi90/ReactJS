// Keypress Detector

import { useState, useEffect } from 'react';

const Practice2 = () => {
    const [input, setInput] = useState("");

    useEffect(() => {
        const keyPress = (e) => {
            setInput(prevInput => prevInput + e.key);
        }

        window.addEventListener("keydown", keyPress);

        return () => window.removeEventListener("keydown", keyPress);
    },[]);

    return(
        <div>You Pressed : {input}</div>
    )
}

export default Practice2;