import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { FaStar } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
