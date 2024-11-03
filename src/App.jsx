
import { Outlet } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import React from 'react'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
