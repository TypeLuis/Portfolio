import React from 'react';

const About = () => {
  return (
      <div id='About' className='content-page'>
        <h1 id='About-Heading' className='heading'>About</h1>

        <div className='details'>
            <h1 className="mb-0">
                    Luis
                    <span className="lastname">Lopez</span>
            </h1>

            <div className="subheading mb-5">
                80 Ross Street · Brooklyn, NY 11249 · (347) 993-8277 ·
                <a href="mailto:name@email.com">typeluisbusiness@gmail.com</a>
            </div>

            <p className="lead mb-5">Software Engineer who's passionate in the field of study that can create both
            refined and functional based web applications. </p>
        </div>
      </div>
  );
};

export default About;
