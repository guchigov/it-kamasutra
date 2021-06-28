import React from 'react';
import {sendMessage, updateMessageText,} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;


    let send = () => {
        props.store.dispatch(sendMessage());
    }
    let messageChange = (text) => {
        props.store.dispatch(updateMessageText(text));
    }

    return <Dialogs updateMessageText={messageChange} sendMessage={send} dialogsPage={state}/>;
}
export default DialogsContainer;
