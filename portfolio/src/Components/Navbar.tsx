import { Navbar } from '@mantine/core';
import { Link } from "react-router-dom";
import React from "react";
import swathi from "../Pictures/swathi.jpg";
import '../Styles/Nav.css';

function Nav() {
    return (
        <><Navbar  width={{ base: 240 }} height={700} p="m">
          <img src={swathi} alt="welcome pic" className='pic' />
          <section className='nav-sections'>
            {/* <span>Swathi Sidharthan</span> */}
            <Link to="/About">About Me</Link>

            <Link to="/Skills">Skills</Link>

            <Link to="/Projects">My works</Link>
            
            <Link to="/Contact">Contact Me</Link>
            <article className='icon-group'>
             <a href='http://www.linkedin.com/in/swathi-sidharthan'><img src='https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png' alt='linkedin' className='icon'/></a>
             <a href='https://github.com/dhyanswathi'><img src='https://static-00.iconduck.com/assets.00/github-icon-512x499-ziwq0a1i.png' alt='github' className='icon'/></a>
            </article>
          </section>
      </Navbar></>
    )
}

export default Nav;