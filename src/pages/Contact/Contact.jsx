import React from 'react'
import { HomeContainer } from '../Home/Home.styled'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import {
  ContactContainer,
  SocialBox,
  SocialItem,
  SocialList,
} from './Contact.styled'

export default function Contact() {
  return (
    <HomeContainer>
      <ContactContainer>
        <SocialBox>
          <SocialList>
            <SocialItem href="https://t.me/ConradoDaRocha">
              Telegram <FaTelegramPlane/>
            </SocialItem>
          </SocialList>
          <SocialList>
            <SocialItem href="https://instagram.com/conrado_darocha">
              Instagram <FaInstagram/>
            </SocialItem>
           
          </SocialList>
        </SocialBox>
      </ContactContainer>
    </HomeContainer>
  )
}
