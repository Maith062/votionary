// import { Search } from "lucide-react";
"use client"
import Image from "next/image";
import { Inter, Roboto, Poppins } from 'next/font/google';
import { useState, useEffect } from 'react' ; 
import { Menu, X } from "lucide-react";   

import Navbar from './Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// console.log(browserImage)
export default function Header() {

  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    setIsMobile(mediaQuery.matches)

    function handleQueryEvent(event){

      setIsMobile(event.matches)
      console.log('Inside the useEffect', isMobile)
      setNavOpen(false)
    }

    mediaQuery.addEventListener('change', handleQueryEvent);

    return () => {
      mediaQuery.removeEventListener('change', handleQueryEvent);
    }

  }, []);

  console.log(`Is mobile: ${isMobile} Is open: ${navOpen}`)

  return (
    <header className={`bg-gradient-to-b from-black/20 to-transparent ${roboto.className} font-semibold items-center`}>
      <div className={isMobile ? "max-w-7xl mx-auto flex items-center justify-between pr-2 pl-2" : "max-w-7xl mx-auto flex items-center justify-center"}>
        {/* Logo Section */}
        <a href='\' className="flex items-center">
          <img
            src={isMobile ? "/images/browser_icon1_cbg.png" : "/images/icon2_cbg.png"}
            alt="Logo"
            className="h-20 mr-4"

          />
        </a>

        {/* Navigation Section */}
        
        <div className="relative md:justify-self-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            className="md:hidden menu-btn "
          >
            {navOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>          
          
          {/* Pass both navOpen and isMobile props */}
          <Navbar navOpen={navOpen} isMobile={isMobile} />
        </div>

        {/* Search Bar Section */}

        <div className="hidden md:block relative mt-1 ml-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* <Search className="h-5 w-5 text-gray-400" /> */}
            <svg className="h-5 w-5 text-white hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>  
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
        </div>

      </div>
    </header>
  );
}

//block w-40 h-8 pl-10 pr-3 py-2 ml-10 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm