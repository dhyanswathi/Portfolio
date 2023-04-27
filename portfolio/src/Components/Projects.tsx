import React from "react";
import { MantineProvider, Grid } from '@mantine/core';
import Nav from "./Navbar";

function Projects() {
    return (
        <>
        <MantineProvider>
      <Grid>
      <Grid.Col span={3}><Nav></Nav></Grid.Col>
      <Grid.Col span={9}>
      projects
      </Grid.Col>
      </Grid>
    </MantineProvider>
        </>
    )
}

export default Projects;