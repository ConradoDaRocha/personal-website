import React from 'react'
import {
  HomeContainer,
  ProfileContainer,
  ProfilePicture,
  Title,
  TextArea,
  Button
} from './Home.styled'
import { Link } from 'react-router-dom'
import Profile from '../../assets/conrado.png'
import { FaGithub } from 'react-icons/fa'

export default function Home() {

  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfilePicture src={Profile} alt="profile picture" />
        <Title>Desenvolvedor Front End</Title>
        <TextArea>
          Bem vindo!
          Sou um desenvolvedor que busca plenamente a qualidade do design.<br/>
          Me dedico a criaçao de interfaces atraentes e fáceis de usar.
        </TextArea>
        <Link to='/Projects'>
          <Button>Projetos <FaGithub /></Button>
        </Link>
      </ProfileContainer>
    </HomeContainer>
  )
}
