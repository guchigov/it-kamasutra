import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";
import Wallpaper from "./Wallpaper/Wallpaper";

const Profile = () => {
    return (
        <div>
            <Wallpaper/>
            <div className={classes.afterWall}>
                <Description/>
                <MyPosts/>
            </div>


        </div>

    );
}
export default Profile;