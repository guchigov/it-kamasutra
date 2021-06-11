import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";
import Wallpaper from "./Wallpaper/Wallpaper";

const Profile = (props) => {

    return (
        <div>
            <Wallpaper/>
            <div className={classes.afterWall}>
                <Description/>
                <MyPosts postsData={props.state.postsState} addPost={props.addPost}/>
            </div>


        </div>

    );
}
export default Profile;