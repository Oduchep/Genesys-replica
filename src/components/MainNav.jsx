import React from "react";
import { NavLink } from 'react-router-dom';
import './MainNav.css';

class SubNav extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        const styler = {
            color: "#ffff",
            fontSize: 20
        }

        return (
            <div className="nav-container">
                <ul className={this.state.clicked ? 'subnav-active' : 'subnav'}>
                    <li><NavLink style={styler} to='/'>HOME</NavLink></li><br/>
                    <li className="nav-links"><NavLink style={styler} to='/software developer'>SOFTWARE DEVELOPERS</NavLink></li><br/>
                    <li className="nav-links"><NavLink style={styler} to='/product designer'>PRODUCT DESIGNERS</NavLink></li><br/>
                    <li className="nav-links"><NavLink style={styler} to='/apply'>APPLY</NavLink></li><br/>
                    <li className="nav-links"><NavLink style={styler} to='/journal'>JOURNAL</NavLink></li><br/>
                    <li className="nav-links"><NavLink style={styler} to='/FAQ'>FAQ</NavLink></li>
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