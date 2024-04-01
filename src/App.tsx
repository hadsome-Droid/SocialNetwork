import React from 'react';
import './App.css';
import {Header} from "./features/header/Header";
import {Sidebar} from "./features/sidebar/Sidebar";
import {Content} from "./features/content/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        </BrowserRouter>

    );
}

export default App;
