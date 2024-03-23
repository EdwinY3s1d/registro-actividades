import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import './menu.css';

function menu() {
    return (
        <div className="menu">
            <div>
            <Link to="/login">login</Link>
            <Link to="/register"> register </Link>
            <Link to="/search"> search </Link>
            </div>
        </div>
    );
    }

export default menu;