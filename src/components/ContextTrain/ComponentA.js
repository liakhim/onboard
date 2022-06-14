import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentA() {
    const [context, setContext] = useContext(Context);
    return (
        <div>
            ComponentA:
            <button style={{border: '1px solid red'}} onClick={() => setContext(context + 'A')}>
                Change Context Value from A
            </button>
        </div>
    );
}
