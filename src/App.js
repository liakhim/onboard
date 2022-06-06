import logo from './logo.svg';
import React from "react";
import { StrictMode } from 'react'
import MainLayout from "./layouts/MainLayout";
import Draggable from "./components/Draggable/Draggable.js";
import './styles/main.scss';
import './App.css';

const App = () => {
    return (
        <React.StrictMode>
        <MainLayout>
            <div className="App">
                <Draggable/>
            </div>
        </MainLayout>
        </React.StrictMode>
    );
}

export default App;
