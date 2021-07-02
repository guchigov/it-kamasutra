import React from 'react';
import {sendMessage, updateMessageText,} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import storeContext from "../../storeContext";


const DialogsContainer = () => {

    return <storeContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage;


            let send = () => {
                store.dispatch(sendMessage());
            }
            let messageChange = (text) => {
                store.dispatch(updateMessageText(text));
            }

            return <Dialogs updateMessageText={messageChange}
                            sendMessage={send}
                            dialogsPage={state}/>;
        }
    }
    </storeContext.Consumer>
}
export default DialogsContainer;
