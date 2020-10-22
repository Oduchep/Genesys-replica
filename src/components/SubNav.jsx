import React from "react";
import { NavLink } from 'react-router-dom';
import './SubNav.css';

class SubNav extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){

        return (
            <div className="nav-container">
                <ul className={this.state.clicked ? 'subnav-active' : 'subnav'}>
                    <li><NavLink className="nav-links" to='/'>HOME</NavLink></li><br/>
                    <li><NavLink className="nav-links" to='/software developer'>SOFTWARE DEVELOPERS</NavLink></li><br/>
                    <li><NavLink className="nav-links" to='/product designer'>PRODUCT DESIGNERS</NavLink></li><br/>
                    <li><NavLink className="nav-links" to='/apply'>APPLY</NavLink></li><br/>
                    <li><NavLink className="nav-links" to='/journal'>JOURNAL</NavLink></li><br/>
                    <li><NavLink className="nav-links" to='/FAQ'>FAQ</NavLink></li>
                </ul>

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