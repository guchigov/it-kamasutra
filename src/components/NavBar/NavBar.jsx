import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

console.log(classes);
const NavBar = () => {
    return (

        <nav className={classes.nav}>
            <div className={classes.navMargin}>
                <div className={classes.item}><NavLink to='/profile' activeClassName={classes.activeLink}>
                    Profile</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.activeLink}>
                    Messages</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/news' activeClassName={classes.activeLink}>
                    News</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/music' activeClassName={classes.activeLink}>
                    Music</NavLink>
                </div>
                <div className={`${classes.item} ${classes.settings}`}><NavLink to='/settings'
                                                                                activeClassName={classes.activeLink}>
                    Settings</NavLink>
                </div>
            </div>

        </nav>
    );
}
export default NavBar;