import React from 'react';
import classes from './Dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <BrowserRouter>
        <div className={classes.dialogs}>


            <div className={classes.usersDialogs}>
                <div className={classes.user + ' ' + classes.activeUser}>
                    <NavLink to='/dialogs/1'>
                        Dimich
                    </NavLink>
                </div>
                <div className={classes.user}>
                    <NavLink to='/dialogs/2'>
                        Andy
                    </NavLink>
                </div>
                <div className={classes.user}>
                    <NavLink to='/dialogs/3'>
                        Victor
                    </NavLink>
                </div>
                <div className={classes.user}>
                    <NavLink to='/dialogs/4'>
                        Sveta
                    </NavLink>
                </div>
                <div className={classes.user}>
                    <NavLink to='/dialogs/5'>
                        Maria
                    </NavLink>
                </div>
                <div className={classes.user}>
                    <NavLink to='/dialogs/6'>
                        Hannah
                    </NavLink>
                </div>


            </div>

            <div className={classes.messages}>
                <div className={classes.mesage}>
                    Hello! how are u?
                </div>

                <div className={classes.mesage}>
                    yo!
                </div>

                <div className={classes.mesage}>
                    See you.
                </div>
            </div>


        </div>
        </BrowserRouter>

    );

}
export default Dialogs;
