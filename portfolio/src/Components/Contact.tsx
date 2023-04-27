import React from "react";
import { MantineProvider, Grid } from '@mantine/core';
import Nav from "./Navbar";

function Contact() {
    return (
        <><MantineProvider>
        <Grid>
        <Grid.Col span={3}><Nav></Nav></Grid.Col>
        <Grid.Col span={9}>
        skills
        </Grid.Col>
        </Grid>
      </MantineProvider>
        
        </>
    )
}

export default Contact;