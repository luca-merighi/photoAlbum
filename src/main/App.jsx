import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import Aside from '../components/Aside/Aside'
import Routes from './Routes'
import Footer from '../components/Footer/Footer'

import 'material-icons/iconfont/material-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import './Animations.scss'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Aside />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}