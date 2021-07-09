const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, avatarURL:'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png', follow:true, fullName: 'Dmitrii D.', status: 'I am a boss', location:{ country: 'Russia', city:'Moscow'}},
        {id: 2, avatarURL:'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png', follow:false, fullName: 'Sergei', status: 'do stuff', location:{ country: 'Kazakhstan', city:'Almaty'}},
        {id: 3, avatarURL:'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png', follow:true, fullName: 'Andrew', status: 'go to csgo', location:{ country: 'Russia', city:'Big Town'}},
        {id: 4, avatarURL:'https://www.shareicon.net/data/256x256/2016/07/26/802043_man_512x512.png', follow:false, fullName: 'Tim', status: 'hungry', location:{ country: 'USA', city:'Colorado'}}

    ]
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                   if (u.id === action.userId) {
                       return {...u, follow: true}
                   }
                   return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}


export const followAC  = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId});
export const setUsersAC = (users) => ({type:SET_USERS, users});

export default usersReducer;