import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import React from 'react'

const App = () => {
  return (
    <div className="flex-col">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
