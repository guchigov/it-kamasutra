import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} updateMessage={store.updateMessage.bind(store)} addPost={store.addPost.bind(store)} sendMessage={store.sendMessage.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerender(store.getState());

store.subscribe(rerender);

reportWebVitals();
