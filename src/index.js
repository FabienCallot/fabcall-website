import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App/App';
import { BrowserRouter} from 'react-router-dom';
import './styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <App tab="home" />
    </BrowserRouter>,
);