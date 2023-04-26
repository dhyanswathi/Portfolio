import { Navbar } from '@mantine/core';
import { Link } from "react-router-dom";
import React from "react";


function Nav() {
    return (
        <><Navbar width={{ base: 250 }} height={500} p="xs">
        <Link to="/About">About Me</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Projects">My works</Link>
          <Link to="/Contact">Contact Me</Link>
      </Navbar></>
    )
}

export default Nav;