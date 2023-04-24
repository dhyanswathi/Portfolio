import { Header } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <><Header height={{ base: 50, md: 70 }} p="md">
          <span>Swathi Sidharthan</span>
          <Link to="/About">About Me</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Projects">My works</Link>
          <Link to="/Contact">Contact Me</Link>
          </Header></>
    )
}

export default Nav;