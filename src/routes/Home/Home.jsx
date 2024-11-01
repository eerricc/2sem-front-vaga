import banner from '../../assets/Banner.jpg'
import marvel from '../../assets/Marvel.jpg'
import DC from '../../assets/DC.jpg'

import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <img src={banner} alt="" className='w-full'/>
      <section className='flex w-[90%] mx-auto my-4 justify-between'>
        <img src={marvel} alt="" className='h-auto w-[40%] rounded-[30%]'/>
        <div className='flex flex-col items-center bg-[#FF9FC5] w-[40%] p-10 rounded-[10%]'>
          <h1 className='text-8xl m-10 text-[#96305A] font-bold'>Marvel</h1>
          <p className='text-4xl font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit tenetur doloribus id inventore nam voluptatum libero mollitia assumenda amet vel laboriosam at minus magnam praesentium, rerum porro iste sed voluptatibus.</p>
        </div>
      </section>
      <section className='flex w-[90%] mx-auto my-4 justify-between'>
        <div className='flex flex-col justify-center items-center bg-[#FF9FC5] w-[40%] p-10 rounded-[10%]'>
          <h1 className='text-8xl m-10 text-[#96305A] font-bold'>DC</h1>
          <p className='text-4xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus laborum recusandae veniam veritatis, officiis quisquam. Nisi asperiores vitae ad consequuntur veniam fugiat, fugit iusto, cum aliquam suscipit fuga eveniet necessitatibus.</p>
        </div>
        <img src={DC} alt="" className='h-auto w-[40%] rounded-[30%]'/>
      </section>
    </div>
  )
}

export default Home
