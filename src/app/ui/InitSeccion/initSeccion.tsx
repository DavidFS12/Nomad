"use client"
import React, { useState } from 'react'

export const Init = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const presentation = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className=''>
      <div className='relative flex flex-col justify-center items-center h-[500px] w-full'>
        <div className='textLeft top-[100px] w-full flex justify-center'>
          <h1 className="font-medium text-white text-[132px] "> NOMAD</h1> 
        </div>
        <div className='img1 flex justify-center items-center relative top-20'>
          <img className="img2 w-[250px] border-[10px] rounded-full" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/6520eefa49e3fb88ce3e7925_Eye_7.gif" loading="lazy" alt=""/>
        </div>
        <div className='textRight flex justify-center w-full top-[480px]'>
          <h1 className="font-medium text-white text-9xl"> ART STUDIO</h1>
        </div>
        <div className='textRight2 w-full flex justify-center top-[600px]'>
          <h1 className='text-[#8c8c8c] text-[25px] '>Based in UT</h1>
        </div>
        <div className='relative w-full pl-[180px] top-[550px]'>
          <h1 className='font-medium text-white text-[112px] '>ABOUT</h1>
        </div>
      </div>

      <div className=' relative flex justify-center items-center w-full'>
        <div className='w-[450px]'>
        </div>
        <div className='relative w-[800px] text-white text-5xl top-[510px] bg-secondary'>
          <p>Creating beautiful, functional designs with a 
            global team. We adapt to your vision and become the 
            guide of your journey, strengthening your brand's relationship 
            with your customers at each point of contact.
          </p>
        </div>
      </div>

      <div className='bg-cyan-200 w-1/4 '>

      </div>

    </header>
  )
}
