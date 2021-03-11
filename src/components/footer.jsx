import React from 'react'
import Styled from '@emotion/styled'

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
`

const SocialMediaList = Styled.ul`
float:right;
display:inline;
padding:0;
margin:0;
`
const SocialMediaItem = Styled.li`
float:right;
display:inline;
padding:1rem;
`

const Footer = () => {
      return (
        <MyFooter>
          <Copyright>
            ©{new Date().getFullYear()} Jackie Ho, JAMStacked With Gatsby, Contentful & Netlify
          </Copyright>
          <SocialMediaList>
            <SocialMediaItem>
              <img alt="" src="https://via.placeholder.com/32"/></SocialMediaItem>
            <SocialMediaItem>
              <img alt=""  src="https://via.placeholder.com/32"/></SocialMediaItem>
            <SocialMediaItem>
              <img alt="" src="https://via.placeholder.com/32"/></SocialMediaItem>
            <SocialMediaItem>
              <img alt=""  src="https://via.placeholder.com/32"/></SocialMediaItem>
          </SocialMediaList>
    </MyFooter>
        );
      }

export default Footer

