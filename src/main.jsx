import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Login from './components/Login/Login.jsx'
import Airnub from './components/Airnub/Airnub.jsx'
import Signup from './components/Signup/Signup.jsx'
import Home from './components/Home/Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='login' element={<Login />}/> 
    <Route path='airnub' element={<Airnub />}/> 
    <Route path='signup' element={<Signup />}/> 
    <Route path='home' element={<Home />}/> 
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

