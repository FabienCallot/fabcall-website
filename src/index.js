import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

/* This is the main entry point for the application. */
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);