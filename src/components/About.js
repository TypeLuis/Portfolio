import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = (props) => {
    return (
        <div ref={props.aboutRef} id='About' className='content-page'>
            <h1 id='About-Heading' className='heading'>About</h1>

            <div className='details'>
                <h1 className="mb-0">
                    Luis
                    <span className="lastname">Lopez</span>
                </h1>

                <div className="subheading mb-5">
                    (347) 993-8277 ·
                    <a href="mailto:name@email.com">typeluisbusiness@gmail.com</a>
                </div>

                <p className="lead mb-5">Software Engineer who's passionate in the field of study that can create both
                    refined and functional based web applications. </p>

                <div className='icons'>

                    <ul>
                        <li id='github'><a href='https://github.com/TypeLuis' target="_blank" rel="noopener noreferrer"><i><FaGithub /></i></a></li>

                        <li id='linkedin'><a href='https://www.linkedin.com/in/luis-lopez-192565227/' target="_blank" rel="noopener noreferrer"><i><FaLinkedin /></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
