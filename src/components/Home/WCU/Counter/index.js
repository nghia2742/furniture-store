import { useState, useEffect } from 'react';

function Counter({maxNumber}) {
    const [number, setNumber] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (number < maxNumber) {
            setNumber(number + 1);
          }
        }, 0);
        return () => clearInterval(intervalId);
      }, [number, maxNumber]);

    return <span>{number}</span>;
}

export default Counter;