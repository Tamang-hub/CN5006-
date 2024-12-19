import React from 'react';
import './App.css';

import { useState } from 'react';

function UpdateCounter() {

    const [count, setCount] = useState(0);

    const clickEventHandler = () => {
        console.log(count)
        setCount(count + 1)
    };

    return (

        <div>
            <form>
                <h1>click this counter : {count} </h1>
                <button type='button' onClick={clickEventHandler}>
                    Click Me !
                </button>
            </form>
        </div>
    );
    }

    export default UpdateCounter;