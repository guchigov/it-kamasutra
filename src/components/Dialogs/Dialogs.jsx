import React from 'react';
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>


            <div className={classes.usersDialogs}>
                <div className={classes.user + ' ' + classes.activeUser}>
                    Dimich
                </div>
                <div className={classes.user}>
                    Andy
                </div>
                <div className={classes.user}>
                    Victor
                </div>
                <div className={classes.user}>
                    Sveta
                </div>
                <div className={classes.user}>
                    Maria
                </div>
                <div className={classes.user}>
                    Hannah
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

    );

}
export default Dialogs;
