import React from "react";
import { MantineProvider, Grid } from '@mantine/core';
import Nav from "./Navbar";

function Skills() {
    return (
        <>
        <MantineProvider>
      <Grid>
      <Grid.Col span={3}><Nav></Nav></Grid.Col>
      <Grid.Col span={9}>
      tech skills
      </Grid.Col>
      </Grid>
    </MantineProvider>
        </>
    )
}

export default Skills;