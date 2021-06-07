import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let PostsData = [
    {id: 1, message: 'How are you ?', likescount: 3},
    {id: 2, message: 'We will rock U', likescount: 10},
    {id: 3, message: 'Check my Git', likescount: 0},
    {id: 3, message: 'Check my Git', likescount: 0},
    {id: 3, message: 'Check my Git', likescount: 0},
    {id: 3, message: 'Check my Git', likescount: 0},
    {id: 3, message: 'Check my Git', likescount: 0},
    {id: 4, message: 'React is perfect', likescount: 100}
]

let UserDialogsData = [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Hannah'},
    {id: 4, name: 'Rob'},
    {id: 5, name: 'David'},
    {id: 6, name: 'Victor'}

]
let MessagesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hello World!"},
    {id: 3, message: "All love triangle"},
    {id: 4, message: "Nice 2 mu"},
    {id: 5, message: "Yo"},
    {id: 6, message: "Should Lern React Fast"}
]
ReactDOM.render(
  <React.StrictMode>
    <App PostsDataProps={PostsData} UserDialogsDataProps={UserDialogsData} MessagesDataProps={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
