import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/vanshika-goyal-b8464522b/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Vanshikagoyal25" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/vanshikag_25/" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials