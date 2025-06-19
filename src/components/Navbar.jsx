import {useRef, useEffect} from 'react'
import PropTypes from "prop-types";
import Link from 'next/link'


export default function Navbar({navOpen, isMobile}){

    const lastActiveLink = useRef();
    const activeBox = useRef();

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

    const navItems = [
        {
            name: "SIGN UP",
            link: "/signup",
        },
        {
            name: "LOGIN",
            link: "/login",
        },
        {
            name: "ILLUSTRATED",
            link: "/illustrated",
        },
        {
            name: "ANIMATED",
            link: "/animated",
        },
        {
            name: "LISTS",
            link: "/lists",
        },
        {
            name: "COMMUNITY",
            link: "/community",
        }
    ]; 

    return (
        <nav className={isMobile ? 'mobile-navbar' : 'desktop-navbar'}>
            {navItems.map(({name, link, ref}, key) => (
                <Link 
                    href={link} 
                    key={key}
                    ref={ref}
                    className={isMobile ? 'nav-link-mobile' : 'nav-link'}
                    onClick={activeCurrentLink}
                >
                    {name}
                </Link>
            ))}
            {isMobile && <div className="active-box" ref={activeBox}></div>}
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
}