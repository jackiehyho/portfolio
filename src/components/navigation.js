import React from 'react'
import { Link } from 'gatsby'
// import styles from './navigation.module.css'
import Logo from '../assets/jackie.svg'
import styled from '@emotion/styled'

const StyledLogo = styled.img`
  height: 64px;
  width: 64px;
  padding: 1rem;
  left:100;
  display: relative;
`
const LogoContainer = styled.div`
  display:inline-block;
  background-color: #FF3364;
  margin-left: 1rem;
`
const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  background:none;
  padding: 0;
  margin: 0;
  max-height: 100px;
  font-size: 1em;
  float:left;
`
const StyledNavList = styled.ul`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  list-style: none;
  text-decoration: none;
  margin-left:auto;
  text-align:right;
`

const StyledNavListItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  list-style: none;
  text-decoration: none;
  color:white;
  height:100%;
`

const StyledNavLink = styled(Link)`
  text-decoration:none;
`


export default () => (
  <StyledNavbar role="navigation">
    <LogoContainer><a href=""><StyledLogo src={Logo} /></a></LogoContainer>
    <StyledNavList>
      <StyledNavListItem>
        <StyledNavLink to="/">Home</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/blog/">About</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/blog/">Blog</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/blog/">Resume</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/blog/">Contact</StyledNavLink>
      </StyledNavListItem>
    </StyledNavList>
  </StyledNavbar>
)
