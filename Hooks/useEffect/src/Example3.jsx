import { useState, useEffect } from "react";

function Example3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Timer: {count} seconds</h1>;
}

export default Example3;
