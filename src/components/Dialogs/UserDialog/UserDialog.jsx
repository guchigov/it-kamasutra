import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    let way = "/dialogs/" + props.id;

    return (
        <div className={classes.user}>
            <NavLink activeClassName={classes.activeLink} to={way}>{props.name} </NavLink>
        </div>
    );
}
export default UserDialog;
