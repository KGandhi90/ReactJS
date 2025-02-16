import { useEffect, useState } from "react";

const Practice1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Counter Updated : ", count);
    }, [count]);
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default Practice1;