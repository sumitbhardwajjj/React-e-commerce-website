import React from "react";
import './Header.scss';
import { Link, NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div className="header">
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Products">Products</NavLink>
            </div>
            <div>
            <NavLink to="">sign in</NavLink>
            <NavLink to="">sign up</NavLink>
            </div>
        </div>

    )
}

export default Header