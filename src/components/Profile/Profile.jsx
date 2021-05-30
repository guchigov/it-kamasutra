import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Disc from "./Discr/Disc";
import Ocean from "./Ocean/Ocean";

const Profile = () => {
    return (
        <div className={classes.content}>
            <Ocean/>
            <Disc/>
            <MyPosts/>
        </div>

    );
}
export default Profile;