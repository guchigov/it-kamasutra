import React from 'react';
import classes from './Dialogs.module.css'
import Mesage from "./Mesage/Mesage";
import UserDialog from "./UserDialog/UserDialog";
import AnswerMessage from "./AnswerMessage/AnswerMessage";


const Dialogs = (props) => {

    let mapDialog = props.state.dialogsState.map(dialog =>
        <UserDialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let mapMessages = props.state.messageState.map(textMessage =>
        <Mesage message={textMessage.message}/>);

    let mapAnswerMessage = props.state.answerState.map(textMessage =>
         <AnswerMessage message={textMessage.message}/>);


    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        props.sendMessage(text);
        newMessage.current.value = '';
    }
    let messageChange = () => {
        let text = newMessage.current.value;
        props.updateMessage(text);
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
                    <textarea onChange={messageChange} value={props.state.messageForSend} ref={newMessage}/>

                <div><button onClick={sendMessage}>Send message</button></div>
                </div>
            </div>


        </div>
    );
}
export default Dialogs;
