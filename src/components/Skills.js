import React, { useState, useEffect, useRef } from "react";
import functions from '../Functions/Functions'


import dataList from "../data/Skill_Data";




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
              // console.log(i + 1)
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
