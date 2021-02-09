import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import { URLs } from '../__data__/urls';

import Home from './home';
import Basket from './basket';
import ShowcaseDress from './showcase_dress';
import ShowcaseTshirtsW from './showcase_tshirts_women';
import ShowcaseTshirtsM from './showcase_tshirts_men';
import ShowcaseJacketsW from './showcase_jackets_women';
import HomeMans from './home_man';
import ShowcaseJacketsM from './showcase_jackets_men';
import ShowcaseShirtsM from './showcase_shirts_men';
import ShowcaseShirtsW from './showcase_shirts_women';
import ShowcaseHoodiesW from './showcase_hoodies_women';
import ShowcaseJeansW from './showcase_jeans_women';
import ShowcaseJeansM from './showcase_jeans_men';
import ShowcaseSkirts from './showcase_skirts';
import ShowcaseAccessories from './showcase_accessories';
import ShowcaseHoodiesM from './showcase_hoodies_men';
import Order from './ordering';

const Dashboard = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to={URLs.home.url} />
        </Route>

        <Route path={URLs.home.url}>
            <Home />
        </Route>

        <Route path={URLs.basket.url}>
            <Basket />
        </Route>

        <Route path={URLs.showcase_dress.url}>
            <ShowcaseDress />
        </Route>

        <Route path={URLs.home_man.url}>
            <HomeMans />
        </Route>

        <Route path={URLs.showcase_tshirts_women.url}>
            <ShowcaseTshirtsW />
        </Route>

        <Route path={URLs.showcase_tshirts_men.url}>
            <ShowcaseTshirtsM />
        </Route>

        <Route path={URLs.showcase_jackets_women.url}>
            <ShowcaseJacketsW />
        </Route>

        <Route path={URLs.showcase_shirts_women.url}>
            <ShowcaseShirtsW />
        </Route>

        <Route path={URLs.showcase_hoodies_women.url}>
            <ShowcaseHoodiesW />
        </Route>

        <Route path={URLs.showcase_hoodies_men.url}>
            <ShowcaseHoodiesM />
        </Route>

        <Route path={URLs.showcase_jeans_women.url}>
            <ShowcaseJeansW />
        </Route>

        <Route path={URLs.showcase_jeans_men.url}>
            <ShowcaseJeansM />
        </Route>

        <Route path={URLs.showcase_skirts.url}>
            <ShowcaseSkirts />
        </Route>

        <Route path={URLs.showcase_accessories.url}>
            <ShowcaseAccessories />
        </Route>

        <Route path={URLs.showcase_jackets_men.url}>
            <ShowcaseJacketsM />
        </Route>

        <Route path={URLs.showcase_shirts_men.url}>
            <ShowcaseShirtsM />
        </Route>

        <Route path={URLs.ordering.url}>
            <Order />
        </Route>

        <Route path="*">
            <h1>Not found</h1>
        </Route>
    </Switch>
);
export default Dashboard;
