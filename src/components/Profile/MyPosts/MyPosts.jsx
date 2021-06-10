import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let mapPostsData =
        props.postsData.map(postMessage => <Post message={postMessage.message} likescount={postMessage.likescount}/>);
let newPostElement = React.createRef();
   let addPost = () => {
       let text = newPostElement.current.value;
       alert(text);
   }
    return (
        <div className={classes.mypost}>
            <div>
                <div><h3>My posts</h3></div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>

                <div>

                    <button onClick={ () => {addPost()}}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.divPost}>
                {mapPostsData}
            </div>
        </div>

    );
}
export default MyPosts;