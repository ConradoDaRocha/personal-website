import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  @media (max-width: 768px) {
    padding:20px;
    margin-top: 80px;
  }
`
export const ProfilePicture = styled.img`
  width: 80px;
  height: auto;
  @media (max-width: 768px) {
    width:70px;
  }
`
export const Title = styled.h1`
  font-size: 16px;
  color:#0396ff;
  font-weight:500;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
export const TextArea = styled.div`
  color: white;
  font-size: 15px;
  text-align: center;
  margin-top: 8px;
`
export const Button = styled.button`
  background-image: linear-gradient(to left, #002bed, #0396ff);
  color: white;
  padding: 8px 15px;
  margin: 25px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

    &:hover {
      background-image: linear-gradient(to left,#0396ff, #002bed);
      
    }
`
;