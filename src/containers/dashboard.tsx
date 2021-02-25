import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { URLs } from '../__data__/urls';

import Home from './home';
import Basket from './basket';
import HomeMans from './home_man';
import Order from './ordering';
import ShowcaseMen from '../components/showcase_m/showcase_m';
import ShowcaseWoman from '../components/showcase_m/showcase_m';

const Dashboard = () => (
    <Switch>
        {/*<Route exact path="/">*/}
        {/*    <Redirect to={URLs.home.url} />*/}
        {/*</Route>*/}

        <Route exact path={URLs.home.url}>
            <Home />
        </Route>

        <Route exact path={URLs.basket.url}>
            <Basket />
        </Route>

        <Route exact path={URLs.home_man.url}>
            <HomeMans />
        </Route>

        <Route exact path={URLs.showcase_men.url}>
            <ShowcaseMen />
        </Route>

        <Route exact path={URLs.showcase_women.url}>
            <ShowcaseWoman />
        </Route>

        <Route exact path={URLs.ordering.url}>
            <Order />
        </Route>

        <Route path="*">
            <h1>Not found</h1>
        </Route>
    </Switch>
);
export default Dashboard;
