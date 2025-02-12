// Light/Dark Theme Toggler

import { useState } from 'react';

const Practice1 = () => {
    const [theme, setTheme] = useState(true);

    const themeToggler = () => {
        setTheme((prev) => {
            const newTheme = !prev;
            document.body.style.backgroundColor = newTheme ? "#000000" : "#ffffff";
            document.body.style.color = newTheme ? "#ffffff" : "#000000";
            return newTheme;
        });
    }

    return(
        <div style={{ backgroundColor: theme ? "#000000" : "#ffffff", color: theme ? "#ffffff" : "#000000"}}>
            <button onClick={themeToggler} style={{ backgroundColor : theme ? "#ffffff" : "#000000", color: theme ? "#000000" : "#ffffff"}}>{theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
        </div>
    )
}

export default Practice1;