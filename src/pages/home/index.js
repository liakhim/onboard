import React, { useEffect } from "react";
import sidebar from "../../stores/sidebar";
import MainLayout from "../../layouts/MainLayout";
import Counter from "../../stores/counter.js"
import { observer } from "mobx-react-lite";
const counter = new Counter(51);
const Home = observer(() => {
    return (
        <>
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
                    className={'btn btn-success me-2'}
                    onClick={counter.increment}>
                <span>+</span>
            </button>
            <button style={{padding: '5px 10px', border: '1px solid green'}}
                    className={'btn btn-success me-2'}
                    onClick={counter.decrement}>
                <span>-</span>
            </button>
            <button onClick={() => sidebar.getPost(Math.floor(Math.random() * 100))}
                    className={'btn btn-success'}>GET POST</button>
        </>
    )
})
export default Home
