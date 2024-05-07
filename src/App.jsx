import { useState } from 'react'
import {Outlet} from 'react-router-dom'
//based on the url, it  
import './App.css'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <h1>Youtube TM</h1>

      <Navbar />

      <Outlet />
    </>
  )
}

export default App
