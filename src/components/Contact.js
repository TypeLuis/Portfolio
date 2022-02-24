import React, { useState } from 'react'
import axios from 'axios'
import emailjs from '@emailjs/browser';
import env from 'react-dotenv'

const Contact = (props) => {
    const [responseStatus, setResponseStatus] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await emailjs.sendForm('service_f56mnkf', 'template_wew05jt', e.target, env.emailjsUserID);
        setResponseStatus(response.status)
        e.target.reset()
    }
    return (
        <div ref={props.contactRef} id='Contact' className='content-page'>
            <h1 id='Contact-Heading' className='heading'>Contact</h1>

            {responseStatus === 200 ?


                <div>

                    <h1>
                        Thank you for your consideration {name}! I will be sure to get In contact as soon as possible!
                    </h1>

                </div>



                :



                <form onSubmit={(e) => { handleSubmit(e) }}>

                    <div className='textbox email'>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder="Email Address" required />
                    </div>

                    <div className='textbox name'>
                        <label htmlFor="name"></label>
                        <input type="text" name='name' placeholder='Full Name' required onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='textbox message'>
                        <label htmlFor="message"></label>
                        <input type="text" name='message' placeholder='Message' required />
                    </div>

                    <button type='submit'>Send</button>
                </form>

            }

        </div>
    )
}

export default Contact