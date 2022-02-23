import React, { useState } from 'react'
import axios from 'axios'
import emailjs from '@emailjs/browser';

const Contact = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await emailjs.sendForm('service_f56mnkf', 'template_wew05jt', e.target, 'user_tUz3TSgEw0qE3Ag3DhlbQ');
        console.log(response)
        e.target.reset()
    }
    return (
        <div ref={props.contactRef} id='Contact' className='content-page'>
            <h1 id='Contact-Heading' className='heading'>Contact</h1>

            {/* <form action='https://formsubmit.co/typeluis@gmail.com' method='POST'> */}
            <form onSubmit={(e) => { handleSubmit(e) }}>

                <div className='textbox email'>
                    <label htmlFor="email"></label>
                    <input type="email" name="email" placeholder="Email Address" required />
                </div>

                <div className='textbox name'>
                    <label htmlFor="name"></label>
                    <input type="text" name='name' placeholder='Full Name' required />
                </div>

                <div className='textbox message'>
                    <label htmlFor="message"></label>
                    <input type="text" name='message' placeholder='Message' required />
                </div>

                <button type='submit'>Send</button>
            </form>

        </div>
    )
}

export default Contact