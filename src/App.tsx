import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Content} from "./components/content/Content";
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
