import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#D9D9D9] flex justify-center'>
      <div className="flex w-[90%] justify-between p-5">
        <h1>Titulo</h1>
        <nav className="w-[20%]">
          <ul className="flex justify-between">
            <li><Link>Botao1</Link></li>
            <li><Link>Botao2</Link></li>
            <li><Link className="bg-red-300 rounded-full py-2 px-3">Botao3</Link></li>
          </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header