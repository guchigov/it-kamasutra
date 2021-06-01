import React from "react";
// import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Disc from "./Discr/Disc";
import Wallpaper from "./Wallpaper/Wallpaper";

const Profile = () => {
    return (
        <div>
            <Wallpaper/>
            <Disc/>
            <MyPosts/>

        </div>

    );
}
export default Profile;