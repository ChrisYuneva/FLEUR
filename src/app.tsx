import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './__data__/store';
import Dashboard from './containers/dashboard';

const App = () => (
    <Provider store={store}>
        <BrowserRouter basename="/repos">
            <Dashboard />
        </BrowserRouter>
    </Provider>
);

export default App;
