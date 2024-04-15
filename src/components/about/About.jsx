import React from 'react'
import './about.css'
import myImage from '../../assets/mine.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degreie</h5>
                  <small>B.Tech(CSE) <br /><i>ABES Engineering College</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>7.54</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Development</li>
                      
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm an <b>Engineering Undergradute</b> at ABES Engineering College,
                    Ghaziabad. I'm an enthusiastic and driven Software Engineering student
                    seeking a challenging internship opportunity to apply and expand my technical skills. 
                    I am eager to contribute to innovative projects and learn from experienced
                    professionals in the industry . I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About