// Resetting State to Initial Value

import { useState } from 'react';

const Example3 = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button><br />
            <button onClick={() => setCount(initialValue)}>Reset</button>
        </div>
    )
}

export default Example3;