import reportWebVitals from './reportWebVitals';
import state, {addPost, sendMessage, subscribe, updateMessage, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updateMessage={updateMessage} addPost={addPost} sendMessage={sendMessage}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerender(state);

subscribe(rerender);

reportWebVitals();
