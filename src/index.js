import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerender = (state) => {
    debugger;
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

store.subscribe( () => {
    let state = store.getState();
        rerender(state);
}
    );

reportWebVitals();
