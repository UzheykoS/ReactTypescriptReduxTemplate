import * as React from "react"
import TestComponent from './components/TestComponent'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/global.scss';
import initialState from './store/initialState';

const store = configureStore(initialState);

const root = document.createElement('div');
document.body.appendChild(root);
root.style.height = "100%";

render(
    <Provider store={store}>
        <TestComponent />
    </Provider>,
    root
);
