import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import routes from "./routes"
import './styles/main.scss';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom';
const App = () => {
    return (
        <React.StrictMode>
            <MainLayout>
                <Link to="/" className={'me-2'}>HOME</Link>
                <Link to="/profile">Profile</Link>
                {routes.map(({ path, component, name }) => {
                    return <Route key={path} component={component} path={path} exact />
                })}
            </MainLayout>
        </React.StrictMode>
    )
}

export default App;
