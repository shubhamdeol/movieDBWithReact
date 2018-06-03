import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = {}
axios.defaults.params['api_key'] = "bbae21037470474bef1ed1150be432a3";
axios.defaults.params['language'] = "en-US";

let app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
