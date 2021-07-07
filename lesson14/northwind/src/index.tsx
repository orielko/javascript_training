import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Layout from './Components/LayoutArea/Layout/Layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        {/* we need to wrap our layout with the BrowserRouter for the routing */}
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
