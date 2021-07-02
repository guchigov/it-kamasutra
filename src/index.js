import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import storeContext from "./storeContext";

let rerender = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <storeContext.Provider value={store}>
                     <App/>
                </storeContext.Provider>
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
