import React from 'react';
import { useState } from 'react'
import functions from '../Functions/Functions'

import dodge from '../images/DTB.gif'
import dodgeImg from '../images/dodge.png'

import animeGif from '../images/AnimeSearch.gif'
import animeImg from '../images/anime_search.jpg'

import blogImg from '../images/myblog.png'

import storeGif from '../images/StoreSearch.gif'
import storeImg from '../images/store.png'

import Modal from './Modal'


const data_list = [
  {
    'name': 'Dodge The Block',
    'summary': 'Dodge the Block is a complex frontend game that uses EventListeners and Animations to move the blocks A user dodges incoming blocks while collecting the green blocks to increase currency for a shop that utilizes dom manipulation.',
    'gif': dodge,
    'image': dodgeImg,
    'link': {
      'site' : 'https://pages.git.generalassemb.ly/typeluis/Dodge-the-Block/',
      'frontend' : 'https://github.com/TypeLuis/Unit-4-project-frontend',
      'backend' : 'https://github.com/TypeLuis/Unit-4-project-backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': [],
      'libraries': [],
    }
  },

  {
    'name': 'MY BLOG',
    'summary': "A blog page that displays a user's post and youtube videos that uses the database to manipulate the DOM. Utilizes PostgreSQL and node.js for the backend and vanilla Javascript, HTML, CSS for the frontend. My blog is a blog post that allows a user to perform CRUD operation.",
    'gif': dodge,
    'image': blogImg,
    'link': {
      'site' : 'https://pages.git.generalassemb.ly/typeluis/Dodge-the-Block/',
      'frontend' : 'https://github.com/TypeLuis/Unit-4-project-frontend',
      'backend' : 'https://github.com/TypeLuis/Unit-4-project-backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': ['PostgreSQL', 'Node.js'],
      'libraries': ['Express.js'],
    }
  },

  {
    'name': 'ANIME SEARCH',
    'summary': "Anime Search is a full stack web application that queries anime shows from a third party api. A user can add shows to their watched and favorites list and download images of their show. The chart page displays a graph of all user's favorite shows.",
    'gif': animeGif,
    'image': animeImg,
    'link': {
      'site' : 'https://anime-database-project.herokuapp.com/search',
      'frontend' : 'https://github.com/TypeLuis/unit-3-solo-projects-frontend',
      'backend' : 'https://github.com/TypeLuis/Unit-3-Solo-Projects-Backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS'],
      'backend': ['PostgreSQL', 'Node.js'],
      'libraries': ['Express.js', 'React.js', 'Axios', 'ChartJs', 'Dotenv'],
    }
  },

  {
    'name': 'STORE SEARCH',
    'summary': "Store Search is a full stack web application that  scrapes websites like Ebay and NewEgg for products With Beautiful Soup. A user can add Items to their cart and Checkout their Items using Stripe. Different Themes can be switched depending on user's preference.",
    'gif': storeGif,
    'image': storeImg,
    'link': {
      'site' : 'https://store-search-project.herokuapp.com',
      'frontend' : 'https://github.com/TypeLuis/Unit-4-project-frontend',
      'backend' : 'https://github.com/TypeLuis/Unit-4-project-backend'
    },
    'skills': {
      'frontend': ['Javascript', 'HTML', 'CSS', 'SCSS'],
      'backend': ['PostgreSQL', 'Python'],
      'libraries': ['Flask', 'React.js', 'Axios', 'Stripe', 'Beautiful Soup', 'Dotenv'],
    }
  }
]

const Portfolio = (props) => {
  const [modal, setModal] = useState('')


  return (
    <div ref={props.portfolioRef} className='content-page'>
      <h1 className='heading'>Portfolio</h1>

      <div id='portfolio' className='port-details'>
        {data_list.map((item, i) => {
          return (
            <div key={i} className='project-container card card-shadow'>

              <div className='card-header card-image'>
                {item.image && <img src={item.image} />}

              </div>

              <div className='card-body'>

                {item.name && <h2>{item.name}</h2>}
              </div>

              <div className='card-footer'>

                <button onClick={() => { setModal(item) }} className='btn'>More Info</button>

                {/* 1. The href attribute set to the URL of the page you want to link to

                2. The target attribute set to _blank, which tells the browser to open the link in a new tab/window, depending on the browser's settings

                3. The rel attribute set to noreferrer noopener to prevent possible malicious attacks from the pages you link to */}

                <a href={item.link.site} target="_blank" rel="noopener noreferrer">

                  <button className='btn btn-outline'>Visit Site</button>
                </a>

              </div>


            </div>

          )
        })}

        {modal && <Modal modal={modal} setModal={setModal} />}
      </div>
    </div>
  )
};

export default Portfolio;