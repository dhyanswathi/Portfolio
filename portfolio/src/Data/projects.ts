import toyworld from '../Pictures/toyworld.png';
import flight from '../Pictures/flight.png';
import library from '../Pictures/library.png';
import milk from '../Pictures/milk.png';
import portfolio from '../Pictures/portfolio.png';
import puppies from '../Pictures/puppies.png';
import resume from '../Pictures/resume.png';
import saltazon from '../Pictures/saltazon.png';
import tiny from '../Pictures/tiny.png';


export const projects = [
    {
        title: "Toy World",
        subtitle: "ASP.NET WebAPI, React, Javascript, SQL Server, Entity framework, Bootstrap",
        description:
          "An app I have developed for swapping pre-loved toys",
        image: toyworld,
        link: "https://github.com/dhyanswathi/ToyWorld",
    },
    {
        title: "Keep Scribbling",
        subtitle: "React, Typescript, Bootstrap, HTML, CSS",
        description: "A react app for tiny blogs that fetch posts from an external Api and displays according to category",
        image: tiny,
        link: "https://tinyblog-ts-react.netlify.app"
    },
    {
        title: "Resume Builder",
        subtitle: "Asp.Net WebAPI, React, Javascript, HTML, CSS, SQL Server, Entity framework, Azure",
        description: "An application that helps you create a resume in different templates.",
        image: resume,
        link: "https://github.com/dhyanswathi/ReactCVBuilder"
    },
    {
        title: "Flight Finder API",
        subtitle: "Asp.Net WebAPI, SQL Server, Entity Framework, Authentication & Authorization with JWT Tokens",
        description: "A flight booking API providing all possible flights and their corresponding information, connecting flights etc.",
        image: flight,
        link: "https://github.com/dhyanswathi/Flight-finder"
    },
    {
        title: "Saltazon API",
        subtitle: "Asp.Net WebAPI, MySQL, Authentication & Authorization with JWT Tokens",
        description: "An API for e-commerce application built as a part of code test for the provided frontend.",
        image: saltazon,
        link: "https://github.com/dhyanswathi/Saltazon"
    },
    {
        title: "Milk App",
        subtitle: "Asp.Net WebAPI, SQL Server, Entity Framework, Moq, Xunit",
        description: "An API for a milk store built based on the provided JSON data, design and wireframe in a Test driven developement pattern.",
        image: milk,
        link: "https://github.com/dhyanswathi/Milk-App-Api"
    },
    {
        title: "Library MVC",
        subtitle: "ASP.NET MVC, SQL Server, Entity Framework, Bootstrap",
        description: "An app for data keeping in a library built using Model-view-controller for learning purposes. ",
        image: library,
        link: "https://github.com/dhyanswathi/Library-App"
    },
    {
        title: "Puppy Adoption",
        subtitle: "ASP.NET WebAPI, React, TypeScript, SQL Server, EF, HTML, CSS",
        description: "A react app - blog that fetch posts from an external Api and displays according to category",
        image: puppies,
        link: "https://tinyblog-ts-react.netlify.app"
    },
    {
        title: "Portfolio",
        subtitle: "React, Typescript, MantineUI, EmailJS, HTML, CSS",
        description: "A responsive online portfolio built for showcasing my developer skills. Code in github.",
        image: portfolio,
        link: "https://github.com/dhyanswathi/Portfolio"
    }

]