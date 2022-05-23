import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";


const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);

reportWebVitals();