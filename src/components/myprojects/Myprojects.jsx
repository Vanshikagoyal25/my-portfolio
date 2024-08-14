import React from 'react'
import './myprojects.css'
import HIRE_WIRE from '../../assets/HIRE_WIRE.png'
import portfolio from '../../assets/portfolio.png'
import IMG2 from '../../assets/img2.png'
const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
<<<<<<< HEAD
      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={HIRE_WIRE} alt="" />
            </div>
            <h3>AI-Hub</h3>
            <small className='text-light'>Android | Machine Learning </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
=======
>>>>>>> 376d3add849bbc422aaa57aa95726ccc718626e1

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={HIRE_WIRE} alt="" />
            </div>
            <h3>HIRE-WIRE</h3>
<<<<<<< HEAD
            <small className='text-light'>Java Script | ReactJs | MySQL</small>
=======
            <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
>>>>>>> 376d3add849bbc422aaa57aa95726ccc718626e1
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
<<<<<<< HEAD
            <h3>Medical Chatbot</h3>
            <small className='text-light'>Firebase | React | Gemini-Pro-VersionAPI | GPT-API</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25" target="_blank" rel='noreferrer' className='btn'>Github</a>  
=======
            <h3>Beauty Garden</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn'>Github</a>  
>>>>>>> 376d3add849bbc422aaa57aa95726ccc718626e1
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={portfolio} alt="" />
            </div>
<<<<<<< HEAD
            <h3>My Portfolio</h3>
=======
            <h3>My Portfolio(This website)</h3>
>>>>>>> 376d3add849bbc422aaa57aa95726ccc718626e1
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
       
      </div>
    </section>
  )
}

export default Myprojects