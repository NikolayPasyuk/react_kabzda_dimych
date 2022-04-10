import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateDate() {
    //difficult counting
    console.log('generateDate')
    return 37466390
}

export const Example1 = () => {
    console.log('Example1')

    //const initialValue = useMemo(generateDate, [])

    const [counter, setCounter] = useState(generateDate)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
