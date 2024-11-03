import logo from '../../assets/Logo.jpg'

import React from 'react'

const Products = () => {
  return (
    <div className='flex justify-center items-center gap-20'>
        <section className='bg-[#FF9C99] w-[450px] h-[450px] flex flex-col justify-between items-center rounded-xl p-10'>
            <h1 className='font-bold'>produto 1</h1>
            <img src={logo} alt="" className='h-[60%] w-[80%] rounded-xl'/>
            <p className='text-xs font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eum facilis vitae pariatur obcaecati necessitatibus,
               vero explicabo consectetur reprehenderit quia veritatis placeat, assumenda adipisci tenetur impedit ipsa animi vel! Obcaecati?</p>
            <button className='bg-[#602540] p-3 rounded-xl font-bold text-white'>comprar</button>
        </section>
        <section className='bg-[#FF9C99] w-[450px] h-[450px] flex flex-col justify-between items-center rounded-xl p-10'>
            <h1 className='font-bold'>produto 2</h1>
            <img src={logo} alt="" className='h-[60%] w-[80%] rounded-xl'/>
            <p className='text-xs font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eum facilis vitae pariatur obcaecati necessitatibus,
               vero explicabo consectetur reprehenderit quia veritatis placeat, assumenda adipisci tenetur impedit ipsa animi vel! Obcaecati?</p>
            <button className='bg-[#602540] p-3 rounded-xl font-bold text-white'>comprar</button>
        </section>
        <section className='bg-[#FF9C99] w-[450px] h-[450px] flex flex-col justify-between items-center rounded-xl p-10'>
            <h1 className='font-bold'>produto 3</h1>
            <img src={logo} alt="" className='h-[60%] w-[80%] rounded-xl'/>
            <p className='text-xs font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eum facilis vitae pariatur obcaecati necessitatibus,
               vero explicabo consectetur reprehenderit quia veritatis placeat, assumenda adipisci tenetur impedit ipsa animi vel! Obcaecati?</p>
            <button className='bg-[#602540] p-3 rounded-xl font-bold text-white'>comprar</button>
        </section>
    </div>
  )
}

export default Products