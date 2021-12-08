import React from 'react'

import Header from '../Header/Header'

import './Main.scss'

export default function Main(props) {
    return (
        <React.Fragment>
            <Header {...props} />
            <main className="main animation-appear">
                {props.children}
            </main>
        </React.Fragment>
    )
}