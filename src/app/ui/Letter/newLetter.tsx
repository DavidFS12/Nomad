"use client"
import React, {useState} from "react"
import { Footer } from "../Footer/footer"

export const Letter = () => {

  return (
    <div className="w-full h-full py-[100px] relative bg-white"> 
      <div className="w-full h-full absolute rounded-[50px] flex flex-col items-center justify-center top-1/2 transform -translate-y-1/2 z-10 gap-y-10">
        <h1 className="text-[50px] xs:text-[48px] sm:text-[80px] md:text-[88px] xl:text-[100px] xxl:text-[120px] bg-gradient-to-r from-white to-white via-cyan-300 text-transparent bg-clip-text">NEWSLETTER</h1>
        <form className="p-2 md:px-0 rounded-[30px] md:rounded-full flex flex-col md:flex-row lg:items-center md:p-2 text-[16px] sm:text-[32px] md:text-[30px] lg:text-[36px] bg-gradient-to-r from-cyan-300 to-white via-cyan-100 text-transparent">
          <input type="email" className="text-[14px] xs:text-[28px] text-center md:text-left lg:text-center pt-[40px] pb-[50px] sm:px-0 sm:pt-[50px] sm:pb-[80px] md:px-5 md:pb-0 md:pt-0 lg:p-3 xl:p-4 bg-black bg-opacity-0 placeholder-black border-0 outline-none text-black" placeholder="Enter Your Email"/>
          <button className="bg-[#000313] text-white rounded-full py-6 xs:mx-2 xs:px-[120px] sm:px-0 md:px-8 xl:py-7 xl:px-12 md:text-[20px] lg:text-[24px]">
            <p className="sm:px-[160px] md:px-0">Subscribe</p>
          </button>
        </form>
      </div>
      <div className="letterClass bg-secondary w-full rounded-[50px] sm:rounded-[80px] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[550px] xl:h-[600px] xxl:h-[700px]">
      </div>
    </div>
  )
}