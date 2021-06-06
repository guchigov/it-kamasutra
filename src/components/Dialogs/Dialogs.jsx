import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    let way = "/dialogs/" + props.id;

    return (
        <div className={classes.user + ' ' + classes.activeUser}>
            <NavLink to={way}>{props.name}</NavLink>
        </div>


    );
}


const Mesage = (props) => {
    return (
        <div className={classes.mesage}>
            {props.message}
        </div>
    );
}


const Dialogs = (props) => {

    let UserDialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Hannah'},
        {id: 4, name: 'Rob'},
        {id: 5, name: 'David'},
        {id: 6, name: 'Victor'}

    ]
    let MessagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hello World!"},
        {id: 3, message: "All love triangle"},
        {id: 4, message: "Nice 2 mu"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Should Lern React Fast"}
    ]
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
