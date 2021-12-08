import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home/Home'
import Album from '../components/Album/Album'

export default function Router() {
    return (
        <Routes>
            <Route exact path="/home" component={Home} element={<Home />} />
            <Route path="/album" component={Album} element={<Album />} />
            <Route path="*" component={Home} element={<Home />} />
        </Routes>
    )
}