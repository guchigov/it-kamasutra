import React from "react";
import './Profile.css';
const Profile = () => {
return (
    <div className='content'>
        <div className='ocean'>
            <img src='https://images.theconversation.com/files/295442/original/file-20191003-52796-1763ajl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'  />
        </div>
        <div className='avaDiscription'>
            <div className='ava'>
            <img src='https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg'/>
        </div>
            <div className='discription'> Discription</div>
        </div>
        <div className='posts'>
            my posts
            <div> new post</div>
            <div>
                <div> Post 1</div>
                <div> Post 2 </div>
            </div>
        </div>

    </div>

);
}
export default Profile;