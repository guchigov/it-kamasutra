const  SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case("SEND-MESSAGE"):
            let newMessage = {
                id: 3,
                message: state.messageForSend,
            }
            state.answerState.push(newMessage);
            state.messageForSend = '';
            return state;
        case("UPDATE-MESSAGE-TEXT"):
            state.messageForSend = action.text;
            return state;
        default:
            return state;
    }
}

export const sendMessage = () =>  ({type: SEND_MESSAGE});
export const  updateMessageText = (text) =>({type:UPDATE_MESSAGE_TEXT,text: text });
export default dialogsPageReducer;