import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg' alt='avatar picture'/>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>


    );
}
export default Post;