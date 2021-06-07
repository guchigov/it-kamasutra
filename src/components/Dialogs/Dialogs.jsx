import React from 'react';
import classes from './Dialogs.module.css'
import Mesage from "./Mesage/Mesage";
import UserDialog from "./UserDialog/UserDialog";

const Dialogs = (props) => {
    let UserDialogsData = props.DialogsDataProps;
    let MessagesData = props.MessagesDataProps;
    let UserDialogServer = UserDialogsData.map(dialog => <UserDialog name={dialog.name} id={dialog.id}/>);
    let MessageServer = MessagesData.map(textMessage => <Mesage message={textMessage.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.usersDialogs}>
                {UserDialogServer}
            </div>
            <div className={classes.messages}>
                {MessageServer}
            </div>
        </div>
    );
}
export default Dialogs;
