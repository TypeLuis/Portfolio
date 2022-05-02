import React, {useRef} from 'react';
import luis from '../images/Luis.jpg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Navbar = (props) => {
    const [burger, setBurger] = useState(false)
    const [content, setContent] = useState(false)

    setTimeout(() => {

        window.onclick = function (e) {
            if (e.target.classList[0] != 'nav-event' && burger === true) {
                setContent(false)

                setTimeout(() => { setBurger(false) }, 450)
            }
        }
    }, 200)
    const handleClick = () => {
        if (burger === true) {
        }
        else {
            setBurger(true)
            setContent(true)
        }
    }
    return (
        <div>

            <nav ref={props.NavRef} className='nav-event navbar'>

                <ul>

                    {/* <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#00ade1' }}>
                        <span data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp;</span>
                    </li> */}

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#FF807D' }}>
                        <span data-text="&nbsp;About&nbsp;">&nbsp;About&nbsp;</span>
                    </li>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#F6F792' }}>
                        <span data-text="&nbsp;Portfolio&nbsp;">&nbsp;Portfolio&nbsp;</span>
                    </li>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#9EF779' }}>
                        <span data-text="&nbsp;Skills&nbsp;">&nbsp;Skills&nbsp;</span>
                    </li>

                    <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#86F7EC' }}>
                        <span data-text="&nbsp;Contact&nbsp;">&nbsp;Contact&nbsp;</span>
                    </li>



                </ul>


                <span className='portfolio-name'>Luis Lopez</span>

                <span onClick={handleClick} className='nav-event hamburger'>
                    <FontAwesomeIcon
                        className='nav-event'
                        icon={faBars}
                    />
                </span>

                {burger &&

                    <div className={`nav-event burger-content ${String(content)}`}>

                        <ol className='nav-event'>
                            {/* <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#00ade1' }}>
                                <span data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp;</span>
                            </li> */}

                            <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#FF807D' }}>
                                <span data-text="&nbsp;About&nbsp;">&nbsp;About&nbsp;</span>
                            </li>

                            <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#F6F792' }}>
                                <span data-text="&nbsp;Portfolio&nbsp;">&nbsp;Portfolio&nbsp;</span>
                            </li>

                            <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#9EF779' }}>
                                <span data-text="&nbsp;Skills&nbsp;">&nbsp;Skills&nbsp;</span>
                            </li>

                            <li onClick={(e) => { props.handleBackClick(e); }} style={{ "--clr": '#86F7EC' }}>
                                <span data-text="&nbsp;Contact&nbsp;">&nbsp;Contact&nbsp;</span>
                            </li>

                        </ol>

                    </div>


                }
            </nav>

        </div>
    );
};

export default Navbar;
