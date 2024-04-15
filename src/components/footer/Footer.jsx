import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>VANSHIKA</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/vanshika-goyal-b8464522b/"><BsLinkedin/></a>
          <a href="https://github.com/Vanshikagoyal25"><BsGithub/></a>
          <a href="https://www.instagram.com/vanshikag_25/"><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Vanshika Goyal. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer