import React from "react";
import classes from './Users.module.css'
const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([

                {
                    id: 1,
                    avatarURL: 'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png',
                    follow: true,
                    fullName: 'Dmitrii D.',
                    status: 'I am a boss',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 2,
                    avatarURL: 'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png',
                    follow: false,
                    fullName: 'Sergei',
                    status: 'do stuff',
                    location: {country: 'Kazakhstan', city: 'Almaty'}
                },
                {
                    id: 3,
                    avatarURL: 'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png',
                    follow: true,
                    fullName: 'Andrew',
                    status: 'go to csgo',
                    location: {country: 'Russia', city: 'Big Town'}
                },
                {
                    id: 4,
                    avatarURL: 'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png',
                    follow: false,
                    fullName: 'Tim',
                    status: 'hungry',
                    location: {country: 'USA', city: 'Colorado'}
                }




            ]
        )
    }


    return (
        <div>
            {
                props.users.map(u=><div key={u}>
                    <span>
                        <div><img src={u.avatarURL} className={classes.avatarURL} alt=""/></div>
                        <div>
                            {
                                u.follow ? <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> : <button onClick={()=>{props.onFollow(u.id)}}>Unfollow</button>
                            }
                        </div>

                    </span>

                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                    <span>
                        <div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </span>
                    </span>
                </div>)
            }
        </div>

    );
}

export default Users;