import React, {useEffect} from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = (props) => {
    const portfolioRef = props.portfolioRef
    const NavRef = props.NavRef

    useEffect(() => {
        console.log(NavRef)
        const fades = document.getElementsByClassName('fade__in')
        const imgs = document.getElementsByClassName('img_change')

        // const threshold = appearOnScroll ? 1 : 0


        const appearOptions = {
            threshold: 0,
            rootMargin: "-50px 0px"
        }
        const appearOptions2 = {
            threshold: 0,
            rootMargin: "-50px 0px -50px 0px"
        }
        const appearOptions3 = {
            threshold: 0,
            rootMargin: "-50% 0px -50% 0px"
        }



        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {

                    if (entry.boundingClientRect.top > 100) {
                        // Element is above the viewport
                        entry.target.classList.remove('appear')
                    }
                }
                else {
                    entry.target.classList.add('appear')
                }
            })
        }, appearOptions)


        const appearOnScroll2 = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {

                    // Pauses the animation when element is not in view from top or bottom
                        // Element is above the viewport
                        entry.target.style.animationPlayState = 'paused'

                        // NavRef.current.classList.add('appear')
                        // NavRef.current.style.display = 'flex'
                        // }
                        
                    }
                    else {
                        entry.target.style.animationPlayState = 'running'
                        // NavRef.current.classList.remove('appear')
                        // NavRef.current.style.display = 'flex'
                    // appearOnScroll.unobserve(entry.target)
                }
            })
        }, appearOptions2)

        const appearOnScroll3 = new IntersectionObserver((entries, appearOnScroll) => {


            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                        NavRef.current.classList.add('appear')
                    }
                    else {
                        NavRef.current.classList.remove('appear')
                }
            })
        }, appearOptions3)


        for (let fade of fades) {
            appearOnScroll.observe(fade)
        }

        for (let img of imgs) {
            appearOnScroll2.observe(img)
            appearOnScroll3.observe(img)
        }
        // const [img1, img2] = imgs[0].children[0].children






    }, [])

    const buttonClick = (e) => {
        console.log(e)
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
    }

   
    return (
        <div ref={props.aboutRef} id='About' className='content-page'>

            <div className={'mainImg'}>
                <div className={'banner'}>
                    <img className='img_change' src='https://images.unsplash.com/photo-1647603215051-cd634ba66eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />

                    <img className='img_change' src='https://images.unsplash.com/photo-1647659545674-bba70d68563d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />


                    <div className={`${'text_box'} ${'fade__in'}`}>
                        <h1 className={'fade__in'}>
                            Luis
                            <span className="lastName"> Lopez</span>
                        </h1>
                        <p className={'fade__in'}>
                        Full-Stack web developer who's passionate in the field of study that can create both refined and functional based web applications.
                        </p>

                        <button onClick={(e)=>{buttonClick(e)}} className={'fade__in'}>View My Work</button>
                    </div>

                </div>
            </div>


            {/* <div className='details'>

                <div className="subheading mb-5">
                    (347) 993-8277 ·
                    <a href="mailto:name@email.com">typeluisbusiness@gmail.com</a>
                </div>
                <div className='icons'>

                    <ul>
                        <li id='github'><a href='https://github.com/TypeLuis' target="_blank" rel="noopener noreferrer"><i><FaGithub /></i></a></li>

                        <li id='linkedin'><a href='https://www.linkedin.com/in/luis-lopez-192565227/' target="_blank" rel="noopener noreferrer"><i><FaLinkedin /></i></a></li>
                    </ul>
                </div>
            </div>  */}
        </div>
    );
};

export default About;
