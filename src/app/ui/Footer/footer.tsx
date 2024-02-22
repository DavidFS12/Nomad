"use client"
import React, { useState } from 'react'
import { createInvoice } from "@/app/lib/actions"

export const Footer = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const pie = () => {
    setMobileNav(!mobileNav);
  };
  return(
    <footer className='w-full h-screen lg:fixed bottom-0 left-0 bg-secondary p-5 px-10 xs:px-12 lg:px-[100px] pt-[100px] flex-col justify-center items-center'>
      <div className='flex justify-center items-center py-10'>
        <a className='pb-2 text-[36px] xs:text-[44px] sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[110px] bg-gradient-to-r from-white to-white via-red-300 text-transparent bg-clip-text' href="">Hello@nomad.com</a>
      </div>
      <div className='grid lg:grid-cols-2'>
        <div className='text-white lg:text-base xl:text-2xl'>
          <div className='grid grid-cols-3 lg:pt-12 place-content-between'>
            <a className='animated-div flex flex-col gap-2' href="">
              <p className='flex gap-3'>Instagram <img className="w-4" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba25_Arrow%201.svg"></img></p>
              <p className='flex gap-3 opacity-0'>Instagram <img className="w-4" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba25_Arrow%201.svg"></img></p>
            </a>
            <a className='animated-div flex flex-col gap-2 items-center' href="">
              <p className='flex gap-3'>LinkdIn <img className="w-4" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba25_Arrow%201.svg"></img></p>
              <p className='flex gap-3 opacity-0'>LinkdIn <img className="w-4" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba25_Arrow%201.svg"></img></p>
            </a>
            <a className='animated-div flex flex-col gap-2 items-end' href="">
              <p className='flex gap-3'>Twitter <img className="w-4" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba25_Arrow%201.svg"></img></p>
              <p className='flex gap-3 opacity-0'>Twitter <img className="w-4" src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba25_Arrow%201.svg"></img></p>
            </a>
          </div>
          <div className='animated-div'>
            <p> +1 000 000 000</p>
            <p className='opacity-0'> +1 000 000 000</p>
          </div>
        </div>
        <div className="flex flex-col w-full text-white text-[24px] lg:pl-[100px]">
          <form action="createInvoice">
            <input className="bg-black bg-opacity-0 pt-10 border-b-2 w-full" type="text" placeholder="Enter your Email..."/>
            <textarea className='bg-black bg-opacity-0 pt-2 border-b-2 w-full' placeholder="Message..."></textarea>
            <button className='gap-2 pt-16 text-[20px] sm:text-[32px] flex item-center justify-center ml-auto'> 
              SEND<img className='sm:pt-2' src="https://uploads-ssl.webflow.com/65184d2999cb2c224591b978/65184d2999cb2c224591ba27_submit%20arrow.svg"></img>
            </button>
          </form>
        </div>
      </div>
      <div className="w-full absolute bottom-8 grid lg:grid-cols-2 text-white text-[14px] lg:text-[16px] xl:text-[24px]">
        <div className='grid grid-cols-5 text-left pr-10'>
          <a href="">WORK</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT</a>
          <a href="">BLOG</a>
          <a href="">SHOP</a>
        </div>
      </div>
    </footer>
  )
}
