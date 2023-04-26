import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Navbar";
import { MantineProvider, Grid } from '@mantine/core';
import swathi from "../Pictures/swathi.jpg";
import '../Styles/About.css';

function About() {
    return (
        <>
        <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Grid>
      <Grid.Col span={3}><Nav></Nav></Grid.Col>
      <Grid.Col span={9}>
      <h1>Hi! I am a full-stack .Net developer!</h1>
      <h2>Based in Stockholm, Sweden.</h2>
      <Link to="/Contact">
                        <button className='welcome-btn'>Contact Me</button>
            </Link>
        <section>
            <p>Passionate & curious junior developer with good problem solving skills.
            Enthusiastic, responsible & flexible person with ability to learn and collaborate 
            in rapidly changing environments. Experience in C#, .Net, SQL Server, Azure, React, HTML & CSS, 
            agile methods, TDD, CI/CD and kanban. Previously worked as an ayurvedic doctor & changed careers to follow my passion 
            for web development.
            </p>
           
        </section>
        <section>
        something
        </section>
      </Grid.Col>
      </Grid>
    </MantineProvider>
        
        </>
    )
}

export default About;