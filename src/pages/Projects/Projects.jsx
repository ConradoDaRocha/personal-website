import React, { useEffect, useState } from 'react'
import {
  HomeContainer,
} from '../Home/Home.styled'
import {
  ProjectsBox,
  ProjectsContainer,
  ProjectsList,
  ProjectsTitle,
  ProjectsAbout,
  Title
} from '../Projects/Projects.styled'


export default function Projects() {

  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ConradoDaRocha/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
      <HomeContainer>
        <ProjectsContainer>
        <Title>Projetos / Repositórios</Title>
          <ProjectsBox>
            {repositories.map(repository => {
              return(
                <ProjectsList key={repository.id}>
                  <ProjectsTitle>
                    {repository.name}
                  </ProjectsTitle >
                  <ProjectsAbout
                    to={repository.html_url}
                    target='blank' >
                      Saiba mais
                  </ProjectsAbout>
                </ProjectsList>
              )
            })}
          </ProjectsBox>
          </ProjectsContainer>
       </HomeContainer>  
  )
}
