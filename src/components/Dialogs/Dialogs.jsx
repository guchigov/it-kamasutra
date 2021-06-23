import React from 'react';
import classes from './Dialogs.module.css'
import Mesage from "./Mesage/Mesage";
import UserDialog from "./UserDialog/UserDialog";
import AnswerMessage from "./AnswerMessage/AnswerMessage";
import {sendMessage, updateMessageText,} from "../../redux/dialogsPageReducer";



const Dialogs = (props) => {

    let mapDialog = props.state.dialogsState.map(dialog =>
        <UserDialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let mapMessages = props.state.messageState.map(textMessage =>
        <Mesage message={textMessage.message}/>);

    let mapAnswerMessage = props.state.answerState.map(textMessage =>
        <AnswerMessage message={textMessage.message}/>);




    let send = () => {
        props.dispatch(sendMessage());
    }
    let messageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageText(text));
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.usersDialogs}>
                    {mapDialog}
                </div>
                <div className={classes.messages}>
                    {mapMessages}
                </div>
            </div>

            <div className={classes.answer}>
                {mapAnswerMessage}
                <div className={classes.inputMessage}>
                    <textarea placeholder={'Enter your message'} onChange={messageChange} value={props.state.messageForSend} />

                    <div>
                        <button onClick={send}>Send message</button>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Dialogs;
