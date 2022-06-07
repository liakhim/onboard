import React, { useState, useEffect } from "react";
function ApiTest() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(1);
        return () => {
             // alert('jxbcn')
        }
    }, [count]);
    const foo = () => {
        setCount(count + 1)
        // document.title = `Вы нажали ${count} раз`
    }
    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={foo}>
                Нажми на меня
            </button>
            <button style={{border: '1px solid red'}} onClick={() => setCount(null)}>
                Count null
            </button>
        </div>
    );
}
export default ApiTest
