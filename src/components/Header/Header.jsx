import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

export default function Header(props) {
    return (
        <header className="header d-flex align-items-center justify-content-start">
            <nav className="nav d-flex align-items-center justify-content-center">
                <Link to="/home" className="homeLink">
                    <h1 className="animation-left d-flex align-items-end justify-content-center">
                        Photo <span>Album</span> <span className="material-icons-round">camera_alt</span>
                    </h1>
                </Link>
                <div className="divider"></div>
                <div className="navigation">
                    <h3 className="d-flex animation-down align-items-end justify-content-center">
                        {props.title}
                        <span className="material-icons-round">{props.icon}</span>
                    </h3>
                </div>
            </nav>
        </header>
    )
}