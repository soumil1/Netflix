import React, { useState } from 'react'

function Counter() {

    //These are states .... hooks
    const[count, setCount] = useState(0);
    
    return (
    <div>
        <h1>Counter</h1>
        <p>You have clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>

    </div>
    )
}

export default Counter