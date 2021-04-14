import React from 'react'
import Styled from '@emotion/styled'
import LinkedIn from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Github from '../assets/github.svg' 

const NavigationBarHeight = 64;

const MyFooter = Styled.footer`
margin:0;
text-align:center;
align-content: center;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 100;
width: 100%;
max-width: 100vw;
align-items: center;

@media only screen and (min-width: 768px) {
  height: ${NavigationBarHeight  + "px"}; 
  text-align:left;
  display: inline-flex;
  flex-direction: row;
}
`
const Copyright = Styled.p`
display:inline-block;
max-width: 100%;
margin: 0;
padding: 0;
color: #aaaaaa;
float:left;
text-align:center;
padding:1rem;
`

const SocialMediaList = Styled.ul`
float:right;
display:inline;
padding:1rem;
margin:0;
`
const SocialMediaItem = Styled.li`
float:right;
display:inline;
padding:1rem;
`

const StyledLinkedIn = Styled(LinkedIn)`
fill: white;
height: 16px;
transition: fill .5s ease-in;
&:hover{
  fill: #36DBCA;
}
`

const StyledTwitter = Styled(Twitter)`
fill: white;
height: 16px;
transition: fill .5s ease-in;
&:hover{
  fill: #36DBCA;
}
`

const StyledInstagram= Styled(Instagram)`
fill: white;
height: 16px;
transition: fill .5s ease-in;
&:hover{
  fill: #36DBCA;
}
`

const StyledGithub= Styled(Github)`
fill: white;
height: 16px;
transition: fill .5s ease-in;
&:hover{
  fill: #36DBCA;
}
`

const StyledSocialLink = Styled.a`

`

const Footer = () => {
      return (
        <MyFooter>
          <Copyright>
            ©{new Date().getFullYear()} Jackie Ho, JAMStacked With Gatsby, Contentful & Netlify
          </Copyright>
          <SocialMediaList>
          
            <SocialMediaItem>
            <StyledSocialLink href="https://www.instagram.com/jackiehyho/"><StyledInstagram /></StyledSocialLink></SocialMediaItem>
            <SocialMediaItem>
            <StyledSocialLink href="https://twitter.com/jackiehyho"><StyledTwitter /></StyledSocialLink></SocialMediaItem>
            <SocialMediaItem>
            <StyledSocialLink href="https://github.com/jackiehyho/"><StyledGithub /></StyledSocialLink></SocialMediaItem>
            <SocialMediaItem>
            <StyledSocialLink href="https://ca.linkedin.com/in/jackiehyho"><StyledLinkedIn /></StyledSocialLink></SocialMediaItem>
          </SocialMediaList>
        </MyFooter>
        );
      }

export default Footer

