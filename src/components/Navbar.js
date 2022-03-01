import React from "react";
import './Navbar.css' ;

class Navbar extends React.Component {
    state={
        username:'Nguyen Ngoc Duc Huy'
    }
    render() {
        return (
            <nav id='navbar'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>About</li></a>
                </ul>
        
                <div className="nav-details">
                    <p className="nav-username"> {this.state.username} </p>
                </div>
            </nav>
        )
    }
}

export default Navbar;