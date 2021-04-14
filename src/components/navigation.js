import React, {useState} from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/jackie.svg'
import Styled from '@emotion/styled'
import Burger from './burger'


const StyledNavbar = Styled.nav`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  @media (min-width: 768px) {

  }
`

const StyledLogo = Styled(Logo)`
  display: initial;
  height: 32px;
  width: 32px;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`
const LogoContainer = Styled(Link)`
  margin: 0;
  padding: 0;
  max-height: 64px;
  
`

const StyledBurger = Styled(Burger)`
  display:initial;
  margin-left: auto;
  z-index:50;

  @media (min-width: 768px) {
  display: none;
  }
`


const StyledNavList = Styled.ul`
  top:0;
  position:fixed;
  background-color:black;
  display:flex;
  align-items: center;
  justify-content:center;
  width: 100vw;
  padding:0;
  margin:0;
  height: 100%;
  flex-direction: column;
  z-index:50;
  transform: ${({nav}) => 
    nav ? 'translateX(0);' : 'translateX(-100%);'
  };
  @media (min-width: 768px) {
    transform: initial;
    position:initial;
    top:initial;
    background:none;
    display:inline-flex;
    flex-direction: row;
    margin:0;
    padding:0;
    width: initial;
    list-style: none;
    text-decoration: none;
    margin-left:auto;
    padding:1rem;
    justify-content:flex-end;

    }

`

const StyledNavListItem = Styled.li`
  color:white;
  list-style: none;
  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    list-style: none;
    height:100%;
    margin: 0 1em;
  
    &:last-child{
      margin:0;
    }
  }
`

const StyledNavLink = Styled(Link)`
text-decoration:none;

@media (min-width: 768px) {

}
`

const Navigation = () => {


  const [nav, showNav] = useState(false);
  return (

  <StyledNavbar role="navigation">
    <LogoContainer to="/"><StyledLogo /></LogoContainer>
    <StyledBurger onClick={() => showNav(!nav)} />
    <StyledNavList nav={nav}>
      <StyledNavListItem>
        <StyledNavLink to="/">Home</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/blog/">Blog</StyledNavLink>
      </StyledNavListItem>
    </StyledNavList>
  </StyledNavbar>
)
}
export default Navigation;