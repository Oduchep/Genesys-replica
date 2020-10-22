import React from "react";
import { NavLink } from 'react-router-dom';
import './MainNav.css';

class SubNav extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){


        return (
            <div className="main-nav-container">
                <div className="main-nav-div-1">
                    <img className="genesys-logo" src={require("../resources/nav/genesys_logo.png")} alt="genesys logo"/>

                    <ul className={this.state.clicked ? 'main-nav-active' : 'main-nav'}>
                        <li><NavLink className="main-nav-links" to='/learnable'>LEARNABLE</NavLink></li><br/>
                        <li><NavLink className="main-nav-links" to='/agora'>AGORA</NavLink></li><br/>
                        <li><NavLink className="main-nav-links" to='/starzone'>STARZONE</NavLink></li><br/>
                        <li><NavLink className="main-nav-links" to='/about'>ABOUT</NavLink></li><br/>
                        <li><NavLink className="main-nav-links" to='/contact'>CONTACT</NavLink></li><br/>
                    </ul>
                </div>

                <div className="main-nav-div-2">
                    <p>build a product with</p>
                    <button className="dev-studio-button">DEVSTUDIO</button>
                </div>

                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked 
                    ? <img className="times" src={require("../resources/nav/times.png")} alt="times"/> 
                    : <img className="bars" src={require("../resources/nav/bars.png")} alt="bars"/>}
                </div>
            </div>
        )
    }
    
}

export default SubNav;