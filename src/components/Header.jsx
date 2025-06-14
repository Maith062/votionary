// import { Search } from "lucide-react";
"use client"
import Image from "next/image";
import { Inter, Roboto, Poppins } from 'next/font/google';
import { useState } from 'react' ; 

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

  return (
    <header className={`bg-gradient-to-b from-black/20 to-transparent ${roboto.className} font-semibold items-center`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/images/icon2_cbg.png"
            alt="Logo"
            className=" h-20 mr-4"
          />
        </div>

        {/* Navigation Section */}
        
        <div className="relative md:justify-self-center">
          <button className='menu-btn md:hidden' onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen}/>
        </div>

        {/* Search Bar Section */}
        <div className="relative mt-1 ml-10">
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