import React from "react";
import {Card, Image, Text, Group, Button } from '@mantine/core';
import { projects } from "../Data/projects";
import '../Styles/Skills.css';

function Projects() {
    //const baseUrl = 'portfolio/src/Pictures/';
    //const theme = useMantineTheme();

    return (
        <>
      <section id="projects" className="projects">
          <h1 className="sub-heading green">
            Portfolio
          </h1>
          <article className="cards">
          {projects.map((project) => (<Card shadow="sm" padding="lg" radius="md" >
            <Card.Section>
                <Image
                  alt="gallery"
                  height={200} width={300}
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
              href={project.link} target="_blank" rel="noreferrer"
              key={project.image}
              className="ss"><Button>Go to Project</Button>
            </a></Card>
          ))}</article>
    </section>
        </>
    )
}

export default Projects;