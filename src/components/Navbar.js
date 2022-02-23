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

                <ul>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{"--clr" : '#00ade1'}}>
                        <span data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp;</span>
                    </li>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{"--clr" : '#FF807D'}}>
                        <span href='#'  data-text="&nbsp;About&nbsp;">&nbsp;About&nbsp;</span>
                    </li>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{"--clr" : '#F6F792'}}>
                        <span href='#' data-text="&nbsp;Portfolio&nbsp;">&nbsp;Portfolio&nbsp;</span>
                    </li>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{"--clr" : '#9EF779'}}>
                        <span href='#' data-text="&nbsp;Skills&nbsp;">&nbsp;Skills&nbsp;</span>
                    </li>
                    
                    <li onClick={(e) => { props.handleBackClick(e); }} style={{"--clr" : '#86F7EC'}}>
                        <span href='#' data-text="&nbsp;Contact&nbsp;">&nbsp;Contact&nbsp;</span>
                    </li>

                    {/* <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Home</li></Link>

                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>About</li></Link>

                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Portfolio</li></Link>

                    <Link to='/'><li onClick={(e) => { props.handleBackClick(e); }}>Skills</li></Link> */}


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
