// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile"
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    debugger;
    return (

            <div className='app-wrapper'>

                <Header/>
                <NavBar state={props.state.navBar}/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>


            </div>

    );
}

export default App;
