import React from 'react';
import classes from './Dialogs.module.css'
import Mesage from "./Mesage/Mesage";
import UserDialog from "./UserDialog/UserDialog";

const Dialogs = (props) => {

    let mapDialog = props.state.dialogsState.map(dialog =>
        <UserDialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let mapMessages = props.state.messageState.map(textMessage =>
        <Mesage message={textMessage.message}/>);
   let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.usersDialogs}>
                {mapDialog}
            </div>
            <div className={classes.messages}>
                {mapMessages}
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;
