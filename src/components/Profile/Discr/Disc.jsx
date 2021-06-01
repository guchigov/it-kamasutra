import React from "react";
import classes from './Disc.module.css';
const Disc = () => {
    return (
        <div className={classes.avaanddesc}>
            <div className={classes.ava}>
                <img src='https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg' alt={"avatar"}/>
            </div>
            <div className={classes.about}>
                Description
            </div>

        </div>

    );
}
export default Disc;