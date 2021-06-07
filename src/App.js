// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
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
    return (
        <BrowserRouter>
        <div className='app-wrapper'>

            <Header/>
            <NavBar/>

            <div className='app-wrapper-content'>
                <Route  path='/dialogs' render={ () => <Dialogs DialogsDataProps={UserDialogsData} MessagesDataProps={MessagesData} />}/>
                <Route  path='/profile' render={ () => <Profile PostsDataProps={PostsData}/> }/>
                <Route  path='/music' component={Music}/>
                <Route  path='/news' component={News}/>
                <Route  path='/settings' component={Settings}/>

            </div>


        </div>
        </BrowserRouter>
    );
}

export default App;
