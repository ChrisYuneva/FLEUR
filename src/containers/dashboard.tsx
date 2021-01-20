import  React from 'react';
import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import {URLs} from '../__data__/urls';

import Home from './home';

import Basket from "./basket";

import ShowcaseDress from "./showcase_dress";

import ShowcaseTshirtsW from "./showcase_tshirts_women";

import ShowcaseJacketsW from "./showcase_jackets_women";

import HomeMans from "./home_man";

const Dashboard = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to={URLs.home.url}/>
        </Route>

        <Route path={URLs.home.url}>
            <Home/>
        </Route>

        <Route path={URLs.basket.url}>
            <Basket/>
        </Route>

        <Route path={URLs.showcase_dress.url}>
            <ShowcaseDress/>
        </Route>

        <Route path={URLs.home_man.url}>
            <HomeMans/>
        </Route>

        <Route path={URLs.showcase_tshirts_women.url}>
            <ShowcaseTshirtsW/>
        </Route>

        <Route path={URLs.showcase_jackets_women.url}>
            <ShowcaseJacketsW/>
        </Route>

        <Route path={URLs.showcase_shirts_women.url}>
            <p>Рубашки женские</p>
        </Route>

        <Route path={URLs.showcase_hoodies_women.url}>
            <p>Толстовки женские</p>
        </Route>

        <Route path={URLs.showcase_jeans_women.url}>
            <p>Джинсы женские</p>
        </Route>

        <Route path={URLs.showcase_skirts.url}>
            <p>Юбки</p>
        </Route>

        <Route path={URLs.showcase_accessories.url}>
            <p>Аксессуары</p>
        </Route>

        <Route path="*">
            <h1>Not found</h1>
        </Route>
    </Switch>
)
export default Dashboard;