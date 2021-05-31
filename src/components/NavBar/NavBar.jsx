import React from "react";
import classes from './NavBar.module.css';
console.log(classes);
const NavBar = () => {
return (

    <nav className={classes.nav}>
            <div className={classes.navMargin}>
        <div className={`${classes.item} ${classes.active}`}><a>Profile</a></div>
        <div className={classes.item}><a>Messages</a></div>
        <div className={classes.item}><a>News</a></div>
        <div className={classes.item}><a>Music</a></div>
        <div className={`${classes.item} ${classes.settings}`}><a>Settings</a></div>
            </div>

    </nav>
);
}
export default NavBar;