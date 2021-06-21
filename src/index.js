import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerender(store.getState());

store.subscribe(rerender);

reportWebVitals();
