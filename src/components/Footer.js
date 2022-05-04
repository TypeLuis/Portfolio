import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
          <div className='icons'>

            <ul>
                <li id='github'><a href='https://github.com/TypeLuis' target="_blank" rel="noopener noreferrer"><i><FaGithub /></i></a></li>

                <li id='linkedin'><a href='https://www.linkedin.com/in/luis-lopez-192565227/' target="_blank" rel="noopener noreferrer"><i><FaLinkedin /></i></a></li>
            </ul>
          </div>

          <div className="info">
              (347) 993-8277 ·
              <a href="mailto:name@email.com">typeluisbusiness@gmail.com</a>
          </div>
    </footer>
  )
}

export default Footer