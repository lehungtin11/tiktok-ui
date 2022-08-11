import { useState, useEffect } from 'react';

function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(id);
        };
    }, [value, delay]);

    return debounceValue;
}

export default Debounce;
