import "./index.css";
import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { links } from "./Links";


const Header = () => {
    
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    },[]);
    return (
        <header className='container-fluid header'>
            <nav className='header_nav'>
                <ul className="header_nav-list ">
                    {links.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;