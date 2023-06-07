import styled from "styled-components"
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  @media (max-width: 768px) {
    padding-top:60px;
  }

`
export const SocialBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width:400px;
  } 
`
export const SocialList = styled.li`
  background-color:#95959513;
  list-style: none;
  padding: 10px;
  border-radius: 8px;
  background-image: linear-gradient(to left, #002beda9, #0396ffb0);

  &:hover {
    background-image: linear-gradient(to left,#0396ff, #002bed);
    }
`
export const SocialItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
`