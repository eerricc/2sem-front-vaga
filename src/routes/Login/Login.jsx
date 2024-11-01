import logo from '../../assets/Logo.jpg'

import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col grow justify-center items-center bg-blue-300'>
        <section className='w-1/2 h-1/2 bg-red-300 flex-col'>
            <h1 className='text-center'>Login</h1>
            <section className='flex justify-between'>
                <form action="" className='flex flex-col justify-center '>
                    <label htmlFor="">User</label><input type="text" />
                    <label htmlFor="">Senha</label><input type="password" />
                    <button type='submit'>Entrar</button>
                </form>
                <img src={logo} alt="" />
            </section>
        </section>
    </div>
  )
}

export default Login