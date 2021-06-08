import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    let way = "/dialogs/" + props.id;

    return (
        <div className={classes.user}>

            <NavLink activeClassName={classes.activeLink} to={way}><img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg' alt='avatar picture'/>{props.name} </NavLink>

        </div>
    );
}
export default UserDialog;
