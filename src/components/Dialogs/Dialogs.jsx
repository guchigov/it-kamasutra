import React from 'react';
import classes from './Dialogs.module.css'
import Mesage from "./Mesage/Mesage";
import UserDialog from "./UserDialog/UserDialog";
import AnswerMessage from "./AnswerMessage/AnswerMessage";



const Dialogs = (props) => {

    let mapDialog = props.dialogsPage.dialogsState.map(dialog =>
        <UserDialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let mapMessages = props.dialogsPage.messageState.map(textMessage =>
        <Mesage message={textMessage.message}/>);

    let mapAnswerMessage = props.dialogsPage.answerState.map(textMessage =>
        <AnswerMessage message={textMessage.message}/>);




    let onSend = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
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
                    <textarea placeholder={'Enter your message'} onChange={onMessageChange} value={props.dialogsPage.messageForSend} />

                    <div>
                        <button onClick={onSend}>Send message</button>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Dialogs;
