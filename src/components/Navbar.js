import React from 'react';
import luis from '../images/Luis.jpg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Navbar = (props) => {
    const [burger, setBurger] = useState(false)
    const [content, setContent] = useState(false)

    const handleClick = () => {
        if (burger === true) {
            setContent(!content)
            setTimeout(() => { setBurger(!burger) }, 450)
        }
        else {
            setBurger(!burger)
            setContent(!content)
        }
    }
    return (
        <div>

            <nav className='navbar'>
                <img className='profile-img' src={luis} />

                <ul>
                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Home</li></Link>

                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>About</li></Link>

                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Portfolio</li></Link>

                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Skills</li></Link>


                </ul>


                <span className='portfolio-name'>Luis Lopez</span>

                <span onClick={handleClick} className='hamburger'>
                    <FontAwesomeIcon
                        icon={faBars}
                    />
                </span>

                {burger &&

                    <div className={`burger-content ${String(content)}`}>

                        <ol>
                            <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>About</li></Link>

                            <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Portfolio</li></Link>

                            <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Skills</li></Link>

                        </ol>

                    </div>


                }
            </nav>

        </div>
    );
};

export default Navbar;
