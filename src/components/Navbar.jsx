import {useRef, useEffect} from 'react'
import PropTypes from "prop-types";


export default function Navbar({navOpen}){

    const navItems = [
        {
            name: "SIGN UP",
            link: "#",
            className: "nav-link",
        },
        {
            name: "LOGIN",
            link: "#",
            className: "nav-link",
        },
        {
            name: "ILLUSTRATED",
            link: "#",
            className: "nav-link",
        },
        {
            name: "ANIMATED",
            link: "#",
            className: "nav-link",
        },
        {
            name: "LISTS",
            link: "#",
            className: "nav-link",
        },
        {
            name: "COMMUNITY",
            link: "#",
            className: "nav-link",
        }
    ]; 

    return (

        <nav className="navbar">
        {
          navItems.map(({name, link, className, ref}, key) => (
            <a 
            href={link} 
            key={key}
            ref={ref}
            className={className}
            >
              {name}
            </a>
          ))
        }
        {/* <div className="active-box" ref={activeBox}></div> */} 
        </nav>

    )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}