import React from "react";
import { NavLink } from 'react-router-dom';
import './NavAndFooter.css';

const SubNav = () => {
    const styles = {
        color: "white",
        fontSize: 20
    }
    return (
        <div className="nav-container">
            <ul className='subnav'>
                <li><NavLink style={styles} to='/'>Home</NavLink></li>
                <li><NavLink style={styles} to='/software developer'>Software Developer</NavLink></li>
                <li><NavLink style={styles} to='/product designer'>Product Designer</NavLink></li>
                <li><NavLink style={styles} to='/apply'>Apply</NavLink></li>
                <li><NavLink style={styles} to='/journal'>Journal</NavLink></li>
                <li><NavLink style={styles} to='/FAQ'>FAQ</NavLink></li>
            </ul>
        </div>
    )
}

export default SubNav;