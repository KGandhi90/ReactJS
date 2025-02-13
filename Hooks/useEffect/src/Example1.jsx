import React, { useEffect, useState } from 'react';

const Example1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("Count Changed");
    }, [count]);

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default Example1;