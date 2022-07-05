import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactComponent as GA } from '../images/GA.svg'
import { ReactComponent as Resume } from '../images/resume-svgrepo-com (1).svg'



import GADocuments from '../images/Certificate-of-Completion-Luis_Lopez.pdf'

import ResumeDocuments from '../images/01_Luis_Lopez_resume.pdf'

const Footer = (props) => {


  return (
    <footer ref={props.FooterRef}>
      <div className='icons'>

        <ul>
          <li id='github'><a title='Github' href='https://github.com/TypeLuis' target="_blank" rel="noopener noreferrer"><i><FaGithub /></i></a></li>

          <li id='linkedin'><a title='Linkdin' href='https://www.linkedin.com/in/luis-lopez-192565227/' target="_blank" rel="noopener noreferrer"><i><FaLinkedin /></i></a></li>

          <li id='General_Assembly'>
            <a title='General Assembly' href={GADocuments} target="_blank" rel="noopener noreferrer"><i><GA /></i>

            </a>
          </li>

          <li id='resume'>
            <a title='Resume' href={ResumeDocuments} target="_blank" rel="noopener noreferrer"><i><Resume /></i>

            </a>
          </li>
        </ul>
      </div>

      <div className="info">
        <a href="mailto:name@email.com">typeluisbusiness@gmail.com</a>
      </div>


    </footer>
  )
}

export default Footer