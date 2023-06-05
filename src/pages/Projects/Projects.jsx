import React, { useEffect, useState } from 'react'
import {
  HomeContainer,
  ProfileContainer
} from '../Home/Home.styled'
import {
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
        <ProfileContainer>
        <Title>Projetos / Repositórios</Title>
          <ProjectsContainer>
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
          </ProjectsContainer>
          </ProfileContainer>
       </HomeContainer>  
  )
}
