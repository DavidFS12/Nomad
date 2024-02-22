"use client"
import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { NavBarOptions } from './NavBarOptions'
import { routes } from '@/app/lib/resourses'

export const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className='sticky top-0 z-20'>
      <nav className='w-full h-auto px-36 pt-12 pb-5'>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='-z-10'>
          <span className={`text-[28px] font-semibold leading-[100%] text-primary`}>NOMAD</span>
          </div>
          <div>
          <motion.button
              initial='hide'
              animate={mobileNav ? "show" : "hide"}
              onClick={toggleMobileNav}
              className='w-14 h-14 bg-primary rounded-xl flex flex-col items-center justify-center space-y-[6px] px-[10px] relative z-10 lg:z-0'
            >
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: 45,
                    y: 9,
                  },
                }}
                className="w-7 rounded-[3px] bg-secondary h-[3px] block"
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    opacity: 1,
                  },
                  show: {
                    opacity: 0,
                  },
                }}
                className="w-7 rounded-[3px] bg-secondary h-[3px] block"
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: -45,
                    y: -9,
                  },
                }}
                className="w-7 rounded-[3px] bg-secondary h-[3px] block"
              ></motion.span>
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {
          mobileNav && (
            <>
            <p className='text-color text-red-300'>
            </p>
            <NavBarOptions Routes={routes} />
            </>
            
          )
        }
      </AnimatePresence>
    </header>
  )
}
