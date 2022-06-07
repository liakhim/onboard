import React, { useState, useEffect } from "react";
import Draggable, {DraggableCore} from 'react-draggable';
import './Draggable.scss'
function Drag({height}) {
    const nodeRef = React.useRef(null);
    const [countX, setCountX] = useState(0);
    const [countBurgerX, setCountBurgerX] = useState(0);
    const [countY, setCountY] = useState(0);
    const [countBurgerY, setCountBurgerY] = useState(0);
    useEffect(() => {
        setCountX(100)
        setCountY(0)
        setCountBurgerX(600)
        setCountBurgerY(0)
        document.title = `X координата ${countX}`;
    }, []);
    const eventHandler = (e, data) => {
        const d = {data}
        console.log(d)
        setCountX(d.data?.lastX)
        setCountY(d.data?.lastY)
        document.title = `X координата ${countX}`;
    }
    const eventHandlerBurger = (e, data) => {
        const d = {data}
        console.log(d)
        setCountBurgerX(d.data?.lastX)
        setCountBurgerY(d.data?.lastY)
        document.title = `X координата ${countX}`;
    }
    return (
        <div style={{'display': 'flex', position: 'relative', height: height}}>
            <Draggable
                nodeRef={nodeRef}
                position={{x: countX, y: countY}}
                bounds="parent"
                onStop={eventHandler}>
                <div ref={nodeRef}
                     style={{border: "2px solid red", padding: "1rem", width: "240px", cursor: 'pointer'}}>
                    <div className="handle">Logo {countX} / {countY}</div>
                </div>
            </Draggable>
            <Draggable
                nodeRef={nodeRef}
                position={{x: countBurgerX, y: countBurgerY}}
                bounds="parent"
                onStop={eventHandlerBurger}>
                <div ref={nodeRef}
                     style={{border: "2px solid red", padding: "1rem", width: "240px", cursor: 'pointer'}}>
                    <div className="handle">Burger {countBurgerX} / {countBurgerY}</div>
                </div>
            </Draggable>
        </div>
    );
}

export default Drag;
