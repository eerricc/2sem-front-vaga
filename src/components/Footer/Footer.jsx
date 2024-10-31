import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitterx.png'
import face from '../../assets/facebook.png'

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#96305A] mt-auto'>
      <div className='flex justify-center p-5'>
        <img src={insta} alt="" className='m-5'/>
        <img src={twitter} alt="" className='m-5'/>
        <img src={face} alt="" className='m-5'/>
      </div>
      <h6 className='text-center font-bold text-white'>@copyright</h6>
    </footer>
  )
}

export default Footer