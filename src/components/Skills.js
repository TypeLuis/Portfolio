import React, { useState, useEffect, useRef } from "react";
import functions from '../Functions/Functions'
import * as FontAwesome from 'react-icons/fa'
import * as Devicons from "react-icons/di"
import * as SimpleIcons from "react-icons/si"



const dataList = [
  {
    title: 'Python',
    icon: FontAwesome.FaPython,
    description: 'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.'
  },

  {
    title: 'React',
    icon: FontAwesome.FaReact,
    description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
  },

  {
    title: 'JavaScript',
    icon: Devicons.DiJavascript,
    description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. '
  },

  {
    title: 'HTML',
    icon: SimpleIcons.SiHtml5,
    description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.'
  },

  {
    title: 'CSS',
    icon: Devicons.DiCss3,
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. '
  },

  {
    title: 'SASS',
    icon: Devicons.DiSass,
    description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes.'
  },

  {
    title: 'PostgreSQL',
    icon: Devicons.DiPostgresql,
    description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance'
  },

  {
    title: 'NPM',
    icon: Devicons.DiNpm,
    description: 'npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.'
  },

  {
    title: 'Flask',
    icon: SimpleIcons.SiFlask,
    description: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions'
  },

  {
    title: 'Stripe',
    icon: FontAwesome.FaStripeS,
    description: 'Stripe primarily offers payment processing software and application programming interfaces for e-commerce websites and mobile applications. Stripe is a technology company that builds economic infrastructure for the internet.'
  },

  {
    title: 'Selenium',
    icon: SimpleIcons.SiSelenium,
    description: 'Selenium is an open-source umbrella project for a range of tools and libraries aimed at supporting web browser automation. Selenium provides a playback tool for authoring functional tests without the need to learn a test scripting language (Selenium IDE)'
  },

  {
    title: 'Heroku',
    icon: Devicons.DiHeroku,
    description: 'Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007.'
  },

  {
    title: 'Node',
    icon: Devicons.DiNodejs,
    description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
  },
]

const Skills = (props) => {

  const [modal, setModal] = useState('')

  return (
    <div ref={props.skillRef} id='skills' className='content-page'>
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
