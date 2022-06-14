import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
// import counter from "./stores/counter";
import Counter from "./stores/counter.js"
import Sidebar from "./stores/sidebar.js"
import './styles/main.scss';
import './App.css';
import {observer} from "mobx-react-lite";
const counter = new Counter(51);
const sidebar = new Sidebar();
const App = observer(() => {
    return (
        <React.StrictMode>
            <MainLayout>
                <div style={{padding: '20px'}}>
                    <p>{counter.count}</p>
                    <hr/>
                    <b>{counter.double}</b>
                </div>
                {sidebar.posts.map(post => (
                    <span>{JSON.stringify(post)}</span>
                ))}
                <pre>
                    <span>({sidebar.post.id})</span>
                    {sidebar.post.title}
                </pre>
                <button style={{padding: '5px 10px', border: '1px solid green'}}
                        className={'me-2'}
                        onClick={counter.increment}>
                    <span>+</span>
                </button>
                <button style={{padding: '5px 10px', border: '1px solid green'}}
                        className={'me-2'}
                        onClick={counter.decrement}>
                    <span>-</span>
                </button>
                <button onClick={() => sidebar.getPost(Math.floor(Math.random() * 100))}
                        className={'btn btn-success'}>GET POST</button>
            </MainLayout>
        </React.StrictMode>
    )
})

export default App;
