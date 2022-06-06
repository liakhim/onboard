import React from "react";
import Draggable, {DraggableCore} from 'react-draggable';
import './Draggable.scss'
function App() {
    const nodeRef = React.useRef(null);
    const eventHandler = (e, data) => {
        const d = {data}
        console.log(d.data?.lastX);
    }
    return (
            <Draggable
                nodeRef={nodeRef}
                defaultPosition={{x: 0, y: 0}}
                onStop={eventHandler}>
                <div ref={nodeRef} style={{border: "2px solid red", padding: "1rem", width: "30%"}}>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </div>
            </Draggable>
    );
}

export default App;
