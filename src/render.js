import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewPostText,updateMessage} from "./redux/state";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updateMessage={updateMessage} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
