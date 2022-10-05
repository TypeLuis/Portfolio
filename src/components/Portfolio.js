import React from 'react';
import { useState } from 'react'
import functions from '../Functions/Functions'

import Modal from './Modal'

import data_list from '../data/Portfolio_Data'


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

        {modal && <Modal menu='main' modal={modal} setModal={setModal} />}
      </div>
    </div>
  )
};

export default Portfolio;