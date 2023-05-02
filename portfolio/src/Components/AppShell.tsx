import {
  AppShell,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import swathi from "../Pictures/swathi.jpg";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../Styles/Nav.css';
import Home from './Home';

export default function Appshell() {
  const theme = useMantineTheme();

  return (
    <Router>
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!false} width={{ sm: 160, lg: 260 }}>
                    <img src={swathi} alt="welcome pic" className='pic' />
          <section className='nav-sections'>
            <Text component={Link} variant='link' to="/">
               <span className='green'>Swathi Sidharthan</span>
            </Text>
            <Text component={Link} variant='link' to="/About">About Me</Text>

            <Text component={Link} variant='link' to="/Skills">Skills</Text>

            <Text component={Link} variant='link' to="/Projects">My works</Text>
            
            <Text component={Link} variant='link' to="/Contact">Contact Me</Text>
            <article className='icon-group'>
             <a href='http://www.linkedin.com/in/swathi-sidharthan'><img src='https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png' alt='linkedin' className='icon'/></a>
             <a href='https://github.com/dhyanswathi'><img src='https://static-00.iconduck.com/assets.00/github-icon-512x499-ziwq0a1i.png' alt='github' className='icon'/></a>
            </article>
          </section>
        </Navbar>
      }>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </AppShell>
    </Router>
  );
}