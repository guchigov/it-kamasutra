import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Disc from "./Discr/Disc";
import Wallpaper from "./Wallpaper/Wallpper";

const Profile = () => {
    return (
        <div className={classes.content}>
            <Wallpaper/>
            <Disc/>
            <MyPosts/>
        </div>

    );
}
export default Profile;