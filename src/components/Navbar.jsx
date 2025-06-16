import {useRef, useEffect} from 'react'
import PropTypes from "prop-types";


export default function Navbar({navOpen, isMobile}){

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (isMobile  && lastActiveLink.current && activeBox.current) {
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
            link: "#signup",
            className: "nav-link",
        },
        {
            name: "LOGIN",
            link: "#login",
            className: "nav-link",
        },
        {
            name: "ILLUSTRATED",
            link: "#illustrated",
            className: "nav-link",
        },
        {
            name: "ANIMATED",
            link: "#animated",
            className: "nav-link",
        },
        {
            name: "LISTS",
            link: "#lists",
            className: "nav-link",
        },
        {
            name: "COMMUNITY",
            link: "#community",
            className: "nav-link",
        }
    ]; 

    return (

        <nav className={`navbar${navOpen ? ' active': ''}`}>
        {
          navItems.map(({name, link, className, ref}, key) => (
            <a 
            href={link} 
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
            >
              {name}
            </a>
          ))
        }
        {isMobile && <div className="active-box" ref={activeBox}></div>}
        </nav>

    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
}