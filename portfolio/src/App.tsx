import React from 'react';
import './App.css';
import About from './Components/About';
import Nav from './Components/Navbar';
import { MantineProvider, Grid } from '@mantine/core';

function App() {
  return (
    <div className="App">
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Grid>
      <Grid.Col span={3}><Nav></Nav></Grid.Col>
      <Grid.Col span={9}>
      <About></About>
      </Grid.Col>
      </Grid>
    </MantineProvider>
    </div>
  );
}

export default App;
