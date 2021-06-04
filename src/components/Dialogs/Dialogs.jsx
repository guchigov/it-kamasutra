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
    return (

        <div className={classes.dialogs}>

            <div className={classes.usersDialogs}>
                <UserDialog name={UserDialogsData[0].name} id={UserDialogsData[0].id}/>
                <UserDialog name={UserDialogsData[1].name} id={UserDialogsData[1].id}/>
                <UserDialog name={UserDialogsData[2].name} id={UserDialogsData[2].id}/>
                <UserDialog name={UserDialogsData[3].name} id={UserDialogsData[3].id}/>
                <UserDialog name={UserDialogsData[4].name} id={UserDialogsData[4].id}/>
                <UserDialog name={UserDialogsData[5].name} id={UserDialogsData[5].id}/>


            </div>

            <div className={classes.messages}>
                <Mesage message={MessagesData[0].message}/>
                <Mesage message={MessagesData[1].message}/>
                <Mesage message={MessagesData[2].message}/>
                <Mesage message={MessagesData[3].message}/>
                <Mesage message={MessagesData[4].message}/>
                <Mesage message={MessagesData[5].message}/>
            </div>


        </div>


    );

}
export default Dialogs;
