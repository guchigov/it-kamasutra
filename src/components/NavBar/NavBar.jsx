import React from "react";
import classes from './NavBar.module.css';

console.log(classes);
const NavBar = () => {
    return (

        <nav className={classes.nav}>
            <div className={classes.navMargin}>
                <div className={`${classes.item} ${classes.active}`}><a href='/profile'>Profile</a></div>
                <div className={classes.item}><a href='/dialogs'>Messages</a></div>
                <div className={classes.item}><a href='/news'>News</a></div>
                <div className={classes.item}><a href='/music'>Music</a></div>
                <div className={`${classes.item} ${classes.settings}`}><a href='/settings'>Settings</a></div>
            </div>

        </nav>
    );
}
export default NavBar;