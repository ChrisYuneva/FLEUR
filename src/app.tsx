import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './containers/dashboard';

const App = () => (
    <BrowserRouter basename="/repos">
        <Dashboard />
    </BrowserRouter>
);

export default App;
