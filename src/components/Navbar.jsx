import {useRef, useEffect, useState} from 'react'
import PropTypes from "prop-types";
import Link from 'next/link'

import LoginModal from './LoginModal';

export default function Navbar({navOpen, isMobile, loginState, isAuthenticated}){

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    //in general for the navbar
    const initActiveBox = () => {
        if (isMobile && lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    }

    useEffect(() => {
        initActiveBox();
        
        const handleResize = () => initActiveBox();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    const activeCurrentLink = (event) => {
        if (isMobile) {
            // Mobile: Handle active box
            lastActiveLink.current?.classList.remove('active');
            event.target.classList.add('active');
            lastActiveLink.current = event.target;

            if (activeBox.current) {
                activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
                activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
                activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
                activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
            }
        } 
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        setActiveTab('');
    }

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                loginState(false); // Notify parent of logout
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Define nav items based on authentication status
    const getNavItems = () => {
        if (isAuthenticated) {
            return [
                {
                    name: "LOGOUT",
                    link: "",
                    popup: false,
                    isLogout: true
                },
                {
                    name: "ILLUSTRATED",
                    link: "/illustrated",
                    popup: false,
                },
                {
                    name: "ANIMATED",
                    link: "/animated",
                    popup: false,
                },
                {
                    name: "LISTS",
                    link: "/lists",
                    popup: false,
                },
                {
                    name: "COMMUNITY",
                    link: "/community",
                    popup: false,
                }
            ];
        } else {
            return [
                {
                    name: "SIGN UP",
                    link: "",
                    popup: true,
                    isSignUp: true,
                },
                {
                    name: "LOGIN",
                    link: "",
                    popup: true,
                    isSignUp: false
                },
                {
                    name: "ILLUSTRATED",
                    link: "/illustrated",
                    popup: false,
                },
                {
                    name: "ANIMATED",
                    link: "/animated",
                    popup: false,
                },
                {
                    name: "LISTS",
                    link: "/lists",
                    popup: false,
                },
                {
                    name: "COMMUNITY",
                    link: "/community",
                    popup: false,
                }
            ];
        }
    };

    const navItems = getNavItems();

    return (
        <>
            <nav className={isMobile ? 'mobile-navbar' : 'desktop-navbar'}>
                {navItems.map(({name, link, popup, isSignUp, isLogout, ref}, index) => (
                    <div
                        key={index}
                        className={isMobile ? 'nav-link-mobile' : 'nav-link'}
                    >
                        {popup ? (                        
                            <h1 onClick={isSignUp ? (
                                  () => {
                                    setIsModalOpen(true)
                                    setActiveTab('signup')
                                  }
                                ):(
                                  () => {
                                    setIsModalOpen(true)
                                    setActiveTab('login')
                                  }
                                )}                            
                            ref={ref}>{name}</h1>                                           
                        ) : isLogout ? (
                            <h1 onClick={handleLogout} ref={ref} className="cursor-pointer">
                                {name}
                            </h1>
                        ) : (
                            <Link 
                                href={link}  
                                ref={ref}                           
                                onClick={activeCurrentLink}
                            >
                                {name}
                            </Link>
                        )}
                    </div>
                ))}
                {/* {isMobile && <div className="active-box" ref={activeBox}></div>} */}
            </nav>

            {isModalOpen && (
                <LoginModal 
                    loginOrModal={activeTab} 
                    modalOpen={isModalOpen} 
                    onClose={handleModalClose}
                    loginState={loginState}
                />
            )}
        </>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    loginState: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}