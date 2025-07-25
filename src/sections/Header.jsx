// import { Search } from "lucide-react";
"use client";
import Image from "next/image";
import { Inter, Roboto, Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Navbar from "../components/Navbar";
import UserIcon from "@/components/UserIcon";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// console.log(browserImage)
export default function Header({lightMode}) {
 const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

   // Check authentication status from server
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/status', {
        method: 'GET',
        credentials: 'include', // Important for cookie-based auth
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("data in Header", data)
        setIsAuthenticated(data.isAuthenticated);
        setUser(data.user || null);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    setIsMobile(mediaQuery.matches);

    function handleQueryEvent(event) {
      setIsMobile(event.matches);
      console.log("Inside the useEffect", isMobile);
      setNavOpen(false);
    }

    mediaQuery.addEventListener("change", handleQueryEvent);

    return () => {
      mediaQuery.removeEventListener("change", handleQueryEvent);
    };
  }, []);

  console.log(`Is mobile: ${isMobile} Is open: ${navOpen}`);

  const handleLoginStateChange = async (loginSuccess) => {
    console.log('LoginSuccess in Header.jsx', loginSuccess)
    if (loginSuccess) {
      // Refresh auth status after successful login
      checkAuthStatus();
      console.log('isauthenticeated: ', isAuthenticated)
    } else {
      // Handle logout
      

      try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
  };

  // const user = {
  //   image: 'https://picsum.photos/64/64?random=116'
  // }

  return (
    <header
      className={lightMode ? `bg-gradient-to-b from-black/30 to-transparent ${roboto.className} font-semibold items-center pt-1` : `bg-zinc-900 ${roboto.className} font-semibold items-center pt-1`}
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between md:justify-center">
          {/* Logo Section */}
          <a href="\" className="flex items-center">
            <img
              src={
                // isMobile
                  // "/images/browser_icon1_cbg.png"
                  "/images/icon2_cbg.png"
              }
              alt="Logo"
              className="h-20 mr-4 z-40"
            />
          </a>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <Navbar 
              navOpen={false} 
              isMobile={false} 
              loginState={handleLoginStateChange}
              isAuthenticated={isAuthenticated}
            />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block relative mt-1 ml-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-white hover:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input type="text" placeholder="Search..." className={lightMode ? "search-bar-light" : "search-bar-dark"} />
          </div>

          {isAuthenticated && <div className="hidden md:block ml-10">
            <UserIcon user={user} loginState={handleLoginStateChange}/>
          </div>}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex">
            <button
              onClick={() => setNavOpen((prev) => !prev)}
              className=" menu-btn"
            >
              {navOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            {isAuthenticated  && <div className="md:block ml-10">
              <UserIcon user={user} loginState={handleLoginStateChange}/>
            </div>}
          </div>
        </div>

        {/* Mobile Navigation Menu - Only shown when navOpen is true */}
        {navOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setNavOpen(false)}
            />

            <div
              className={`md:hidden ${
                navOpen ? "block" : "hidden"
              } w-50 absolute right-2 top-15 z-50`}
            >
              <Navbar 
                navOpen={navOpen} 
                isMobile={isMobile} 
                loginState={handleLoginStateChange}
                isAuthenticated={isAuthenticated}
              />
              {/* Mobile Search Bar */}
              <div className="mt-4 pb-4 ">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className=" w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
