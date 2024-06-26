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

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={HIRE_WIRE} alt="" />
            </div>
            <h3>HIRE-WIRE</h3>
            <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Beauty Garden</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Vanshikagoyal25/HireWire" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={portfolio} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
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