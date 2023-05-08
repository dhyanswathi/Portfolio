import React from "react";
import '../Styles/About.css';

function About() {
    return (
        <>
          <section>
          <h1 className="heading">Hi! I am a<span className="green"> full-stack .Net </span>developer!</h1>
          <h2 className="sub-heading">Based in Stockholm, Sweden.</h2>
          <section className="know-me">   
            <article className="summary">
                <p>Passionate & curious junior developer with good problem solving skills.
                Enthusiastic, responsible & flexible person with ability to learn and collaborate 
                in rapidly changing environments. Experience in C#, .Net, SQL Server, Azure, React, HTML & CSS, 
                agile methods, TDD, CI/CD and kanban. Previously worked as an ayurvedic doctor & changed careers to follow my passion 
                for web development.
                </p>
              
            </article>
            <article className="basic-info">
              <span>Name: </span><span className="green">Swathi Sidharthan</span><br/>
              <hr></hr>
              <span>Email: swathysidharthan@gmail.com</span><br/>
              {/* <hr></hr>
              <span>Address:  Dellensvägen 22, 120 58 Årsta</span><br/> */}
              <hr></hr>
              <span>City:</span> <span className="green">Stockholm</span><br/>
              <hr></hr>
              <span className='icon-group'>
             <a href='http://www.linkedin.com/in/swathi-sidharthan'><img src='https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png' alt='linkedin' className='icon'/></a>
             <a href='https://github.com/dhyanswathi'><img src='https://static-00.iconduck.com/assets.00/github-icon-512x499-ziwq0a1i.png' alt='github' className='icon'/></a>
            </span><br/>
            </article>
          </section> 
          </section>
       </>
    )
}

export default About;