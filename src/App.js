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

const App = (props) => {
    let UserDialogsData = props.UserDialogsDataProps;
    let MessagesData = props.MessagesDataProps;
    let PostsData = props.PostsDataProps;
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
