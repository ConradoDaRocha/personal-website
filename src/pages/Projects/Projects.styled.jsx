import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectsContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding:40px;
  }

`

export const ProjectsBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: auto;
  width: 700px;

  @media screen and (max-width: 768px) {
    width:400px;
    
  } 
`
export const Title = styled.h1`
  font-size: 16px;
  color:#ffffff;
  font-weight:500;
`
export const ProjectsList = styled.li`
  background-color:#95959513;
  list-style: none;
  padding: 10px;
`
export const ProjectsTitle = styled.h3`
  color: white;
  font-weight: 100;
`
export const ProjectsAbout = styled(Link)`
  text-decoration: none;
  color: aqua;

`
;