import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#602540] flex justify-center mb-auto'>
      <div className="flex w-[90%] justify-between p-10 items-center">
        <h1 className="font-bold text-[#FF9FC5] text-5xl">Herois</h1>
        <nav className="w-[20%]">
          <ul className="flex justify-between text-[#FF9FC5] font-bold">
            <li><Link to='/'>Home</Link></li>
            <li><Link>Produtos</Link></li>
            <li><Link to='/login' className="bg-white rounded-full py-4 px-6">Login</Link></li>
          </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header