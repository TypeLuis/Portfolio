import React from 'react'
import moon from '../images/moon.png'
import road from '../images/road.png'
import mountain from '../images/mountain.png'
import bg from '../images/bg.jpg'

export const Home = (props) => {
  window.addEventListener('scroll', () => {
    let bg = document.getElementById('bg')
    let moon = document.getElementById('moon')
    let mountain = document.getElementById('mountain')
    let road = document.getElementById('road')
    let text = document.getElementById('text')
    const value = window.scrollY
    console.log(value)

    bg.style.top = value * 0.5 + 'px'
    moon.style.left = -value * 0.5 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    text.style.top = value * 1 + 'px'
  })
  return (
    <div ref={props.homeRef}>
      <section className='content-pae'>
        <img src={bg} id='bg' />
        <img src={mountain} id='mountain' />
        <img src={road} id='road' />
        <h1 id='text'>Welcome To my portfolio!</h1>
        <img src={moon} id='moon' />
      </section>
    </div>
  )
}
