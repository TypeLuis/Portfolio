import React, { useState, useEffect, useRef } from "react";
import functions from '../Functions/Functions'
import * as FontAwesome from 'react-icons/fa'
import * as Devicons from "react-icons/di"
import * as SimpleIcons from "react-icons/si"


const dataList = [
  {
    title: 'Python',
    icon: FontAwesome.FaPython,
    description: 'Python is cool'
  },

  {
    title: 'React',
    icon: FontAwesome.FaReact,
    description: 'React is cool'
  },

  {
    title: 'JavaScript',
    icon: Devicons.DiJavascript,
    description: 'JavaScript is cool'
  },

  {
    title: 'CSS',
    icon: Devicons.DiCss3,
    description: 'CSS is cool'
  },

  {
    title: 'SASS',
    icon: Devicons.DiSass,
    description: 'SASS is cool'
  },

  {
    title: 'PostgreSQL',
    icon: Devicons.DiPostgresql,
    description: 'PostgreSQL is cool'
  },

  {
    title: 'NPM',
    icon: Devicons.DiNpm,
    description: 'NPM is cool'
  },

  {
    title: 'Flask',
    icon: SimpleIcons.SiFlask,
    description: 'Flask is cool'
  },

  {
    title: 'Heroku',
    icon: Devicons.DiHeroku,
    description: 'Heroku is cool'
  },

  {
    title: 'Node',
    icon: Devicons.DiNodejs,
    description: 'Node is cool'
  },
]

const Skills = () => {

  const [modal, setModal] = useState('')

  return (
    <div id='skills' className='content-page'>
      <h1 className='heading'>Skills</h1>

      <div className='details'>

        <div className='slider'>
          {/* https://www.youtube.com/watch?v=sVZX0XvEBhk */}
          {/* https://www.youtube.com/watch?v=3Z780EOzIQs */}

          <div className='slide-track'>

            {dataList.map((item, i) => {
              return (
                <div key={i} className="slide"><span onClick={() => { setModal(item) }}><item.icon /></span></div>
              )
            })}

            {dataList.map((item, i) => {
              return (
                <div key={i} className="slide"><span onClick={() => { setModal(item) }}><item.icon /></span></div>
              )
            })}

          </div>

        </div>

        {modal && functions.showIconModal(modal, setModal)}
      </div>
    </div>
  );
};

export default Skills;
