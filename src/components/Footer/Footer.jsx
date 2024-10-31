import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitterx.png'
import face from '../../assets/facebook.png'

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#96305A] mt-auto'>
      <div className='flex justify-center p-5'>
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
        <img src={face} alt="" />
      </div>
      <h6 className='text-center'>@copyright</h6>
    </footer>
  )
}

export default Footer