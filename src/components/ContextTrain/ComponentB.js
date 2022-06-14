import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentB() {
    const [context, setContext] = useContext(Context);
    return (
        <div>
            <div>ComponentB: {context}</div>
            <button style={{border: '2px solid green'}}
                    onClick={() => setContext(context + 'B')}>
                <span>CHANGE CONTEXT FROM B</span>
            </button>
        </div>
    );
}
