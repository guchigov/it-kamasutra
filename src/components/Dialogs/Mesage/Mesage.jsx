import React from 'react';
import classes from './../Dialogs.module.css'

const Mesage = (props) => {
    return (
        <div className={classes.mesage}>
            {props.message}
        </div>
    );
}
export default Mesage;
