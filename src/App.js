import logo from './logo.svg';
import React from "react";
import { StrictMode } from 'react'
import MainLayout from "./layouts/MainLayout";
import ApiTest from "./components/ApiTest/ApiTest.js";
import './styles/main.scss';
import './App.css';

const App = () => {
    return (
        <React.StrictMode>
            <MainLayout>
                <div className="App">
                    <div className="test-block">
                        <ApiTest/>
                    </div>
                </div>
            </MainLayout>
        </React.StrictMode>
    );
}

export default App;
