import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';


const routes = (
    <Provider store={store}>
        <App/>
    </Provider>);

render(routes, document.getElementById('root'));