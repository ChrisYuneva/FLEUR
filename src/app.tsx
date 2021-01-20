import React from 'react';
import {
    BrowserRouter
} from "react-router-dom";


import Home from './containers/home';
import Basket from "./containers/basket";
import Dashboard from './containers/dashboard'

const App = () => (
    <BrowserRouter basename='/repos'>
        <Dashboard/>
    </BrowserRouter>
);

export default App;