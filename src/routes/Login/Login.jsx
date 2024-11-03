import logo from '../../assets/Logo.jpg'

import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col grow justify-center items-center'>
        <section className='w-1/2 h-1/2 bg-red-300 flex-col p-10 rounded-xl'>
            <h1 className='text-center font-bold'>Login</h1>
            <section className='flex justify-between'>
                <form action="" className='w-1/2 ml-20 flex flex-col justify-center'>
                    <label htmlFor="" className='font-bold'>User</label><input type="text" className='p-2 rounded-md'/>
                    <br />
                    <label htmlFor="" className='font-bold'>Senha</label><input type="password" className='p-2 rounded-md'/>
                    <br />
                    <button type='submit' className='bg-[#602540] w-1/2 self-center p-2 rounded-xl text-white font-bold'>Entrar</button>
                </form>
                <img src={logo} alt="" className='rounded-xl'/>
            </section>
        </section>
    </div>
  )
}

export default Login