import React from "react";
import classes from './Profile.module.css';
import Description from "./Description/Description";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <Wallpaper/>
            <div className={classes.afterWall}>
                <Description/>
                <MyPostsContainer store={props.store}  />
            </div>


        </div>

    );
}
export default Profile;