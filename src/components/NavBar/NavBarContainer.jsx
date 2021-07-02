import React from "react";
import NavBar from "./NavBar";
import storeContext from "../../storeContext";


const NavBarContainer = (props) => {

    return <storeContext.Consumer>
        {(store) => {
            let state = store.getState().navBar;

           return <NavBar state={state}/>
            }
        }
    </storeContext.Consumer>
}
export default NavBarContainer;