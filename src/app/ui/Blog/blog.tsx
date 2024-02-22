"use client"
import {blog} from "./itemBlog";
import React, { useState, useEffect } from 'react'

export const Blog = () => {
  const [offset, setOffset] = useState(0);

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const docWidth = document.body.clientWidth;
    const slidesWidth = document.getElementById('wrap').clientWidth;
    const newOffset = (mouseX / docWidth) * slidesWidth - mouseX;
    setOffset(-newOffset);
  };

  useEffect(() => {
    const handleResize = () => {
      const docWidth = document.body.clientWidth;
      const slidesWidth = document.getElementById('wrap').clientWidth;
      setOffset(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <div className='bg-white py-10 flex flex-col'>
      <h1 className='hidden lg:block blog sticky w-full text-[350px] xl:text-[480px] text-center font-medium text-secondary'>BLOG</h1>
      <h1 className='lg:hidden text-[60px] xs:text-[90px] sm:text-[120px] pl-8 xs:pl-10 sm:pl-20 font-medium text-secondary'>BLOG</h1>
      <div id="wrap" className='hidden lg:flex relative top-[-100px] lg:w-[2600px] px-20 gap-14' style={{ transform: `translate3d(${offset}px, 0, 0)` }} onMouseMove={handleMouseMove}>
        {
          blog.map((item, index) => {
            return (
              <div key={index}>
                <a href=''>
                  <div>
                    <button className='relative left-[20px] top-[440px] p-2 rounded-full bg-white text-center w-32'>{item.minute}</button>
                    <img className='lg:h-[460px] lg:w-[460px] rounded-[40px]' src={item.image}/>
                    <h3 className='text-xl font-medium px-[25px] pt-5'>{item.description}</h3>
                    <p className='text-base px-[25px] pt-2'>{item.title}</p>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>

      <div className='xs:px-10 lg:hidden md:w-[2200px] md:flex sm:px-14 md:px-20 gap-14'>
        {
          blog.map((item, index) => {
            return (
              <div key={index}>
                <a href=''>
                  <div className="pb-14 px-8 grid justify-center">
                    <button className='xs:top-[420px] xs:text-[16px] relative left-[20px] top-[330px] md:top-[340px] sm:top-[500px] p-2 rounded-full bg-white text-center w-32'>{item.minute}</button>
                    <img className='h-[350px] w-[350px] xs:h-[440px] xs:w-[440px] sm:h-[520px] sm:w-[520px] md:h-[360px] md:w-[360px] rounded-[40px]' src={item.image}/>
                    <h3 className='text-xl font-medium px-[25px] pt-5'>{item.description}</h3>
                    <p className='text-base px-[25px] pt-2'>{item.title}</p>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>

      {/* <div className='w-full sm:px-14 md:px-20 gap-14'>
        {
          blog.map((item, index) => {
            return (
              <div key={index}>
                <a href=''>
                  <div className="mb-14">
                    <button className='relative left-[20px] top-[500px] p-2 rounded-full bg-white text-center w-32'>{item.minute}</button>
                    <img className='xs:h-[440px] xs:w-[440px] sm:h-[520px] sm:w-[520px] md:h-[360px] md:w-[360px] rounded-[40px]' src={item.image}/>
                    <h3 className='text-xl font-medium px-[25px] pt-5'>{item.description}</h3>
                    <p className='text-base px-[25px] pt-2'>{item.title}</p>
                  </div>
                </a>
              </div>
            )
          })
        } 
      </div>*/}
    </div>
  )
}