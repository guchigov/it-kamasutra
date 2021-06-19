import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} sendMessage={store.sendMessage.bind(store)} updateMessage={store.updateMessage.bind(store)} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerender(store.getState());

store.subscribe(rerender);

reportWebVitals();
