import React from "react";
import {Card, Image, Text, Group, Grid, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Nav from "./Navbar";
import { projects } from "../Data/projects";

function Projects() {
    return (
        <>
      <Grid>
      <Grid.Col span={3}><Nav></Nav></Grid.Col>
      <Grid.Col span={9}>
      <section id="projects" className="projects">
      <div className="group">
          <h1 className="my-works">
            Apps I've Built
          </h1>
          <p className="des">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <Carousel
      withIndicators
      height={400}
      slideSize="75%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
    >
          {projects.map((project) => (<Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                  alt="gallery"
                  height={160} width={90}
                  src={project.image}
                /></Card.Section>
                <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>
                    {project.title}
                  </Text>
                  </Group>
                  <Text weight={300}>
                    {project.subtitle}
                  </Text>
                  
                  <Text size="sm" color="dimmed">{project.description}</Text>
                  <a
              href={project.link}
              key={project.image}
              className="ss"><Button>Go to Project</Button>
            </a></Card>
          ))}
        </Carousel>
    </section>
      </Grid.Col>
      </Grid>
        </>
    )
}

export default Projects;