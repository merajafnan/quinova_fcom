import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
import Footer from '../components/Footer'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Main