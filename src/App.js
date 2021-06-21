// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";



const App = (props) => {

    return (

            <div className='app-wrapper'>

                <Header/>
                <NavBar state={props.state.navBar}/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/profile'
                           render={() => <Profile stateProfilePage={props.state.profilePage}
                                                  dispatch={props.dispatch} />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>


            </div>

    );
}

export default App;
