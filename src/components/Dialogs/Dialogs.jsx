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
    return (

        <div className={classes.dialogs}>

            <div className={classes.usersDialogs}>
            <UserDialog name='Dimich' id='1'/>
            <UserDialog name='Maria' id='2'/>
            <UserDialog name='Hannah' id='3'/>
            <UserDialog name='Rob' id='4'/>
            <UserDialog name='David' id='5'/>
            <UserDialog name='Victor' id='6'/>


        </div>

    <div className={classes.messages}>
      <Mesage message='Hello' />
      <Mesage  message='Hello World!'/>
      <Mesage message='All love triangles' />
      <Mesage message='nice 2mu'/>
    </div>


</div>


);

}
export default Dialogs;
