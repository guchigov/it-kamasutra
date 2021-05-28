import React from "react";
import classes from './Profile.module.css';
const Profile = () => {
return (
    <div className={classes.content}>
        <div className={classes.ocean}>
            <img src='https://images.theconversation.com/files/295442/original/file-20191003-52796-1763ajl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'  />
        </div>
        <div className='avaDiscription'>
            <div className={classes.ava}>
            <img src='https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg'/>
        </div>
            <div className='discription'> Discription</div>
        </div>
        <div className='posts'>
            my posts
            <div> new post</div>
            <div className='Posts'>
                <div className={classes.item}> Post 1</div>
                <div className={classes.item}> Post 2 </div>
            </div>
        </div>

    </div>

);
}
export default Profile;