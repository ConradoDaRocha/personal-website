import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../assets/conrado.png'
import { FaGithub } from 'react-icons/fa'
import {
  HomeContainer,
  ProfileContainer,
  ProfilePicture,
  Title,
  SubTitle,
  TextArea,
  Button
} from './Home.styled'

export default function Home() {

  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfilePicture src={Profile} alt="profile picture" />
        <Title>Conrado da Rocha</Title>
        <SubTitle>Desenvolvedor Front End</SubTitle>
        <TextArea>
          Bem vindo!
          Sou um Desenvolvedor que busca plenamente a qualidade do design.<br/>
          Me dedico a criação de interfaces atraentes e fáceis de usar.
        </TextArea>
        <Link to='/Projects'>
          <Button>Projetos <FaGithub /></Button>
        </Link>
      </ProfileContainer>
    </HomeContainer>
  )
}
