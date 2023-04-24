import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <h2>Hi! I am a full-stack .Net developer</h2>
        <section>
            <p>Passionate & curious junior developer with good problem solving skills.
            Enthusiastic, responsible & flexible person with ability to learn and collaborate 
            in rapidly changing environments. Experience in C#, .Net, SQL Server, Azure, React, HTML & CSS, 
            agile methods, TDD, CI/CD and kanban. Previously worked as an ayurvedic doctor & changed careers to follow my passion 
            for web development.
            </p>
            <Link to="/Contact">
                        <button className='welcome-btn'>Contact Me</button>
            </Link>
        </section>
        <section>
        
        </section>
        </>
    )
}

export default About;