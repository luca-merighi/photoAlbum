import React from 'react'
import { Link } from 'react-router-dom'

import './Aside.scss'

export default function Aside() {
    return (
        <aside className="aside animation-left d-flex align-items-center justify-content-center">
            <nav className="nav d-flex align-items-center justify-content-center">
                <Link to="/home" className="link">
                    <span className="material-icons-round">home</span>
                </Link>
                <Link to="/album" className="link">
                    <span className="material-icons-round">image</span>
                </Link>
            </nav>
        </aside>
    )
}