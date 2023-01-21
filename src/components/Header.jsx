import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
        <header>
            <div className="logo">
                <h3>logo</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="works">Works</Link>
                    </li>
                    <li>
                        <Link to="skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <div className='header-space'></div>
    </>
    
  );
};

export default Header;