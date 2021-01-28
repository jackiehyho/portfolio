import React from 'react'
import { graphql } from 'gatsby'
// import get from 'lodash/get'
// import { Helmet } from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'
import Styled from '@emotion/styled'
import { Link } from 'gatsby'
import Hero from '../images/hero-image-1.png'


const HeroSection = Styled.div`
  height: calc(100vh - 75px);
  background: url(${Hero}) center center;
  background-size:cover;
  max-width: 100vw;
  z-index: 100;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction:column;

`
const HeroContentArea = Styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position:relative;
`

const HeroImage = Styled.img`
max-height: 100%;
max-width: 100%;

`

const HeroHeader = Styled.h1`
  color: white;
  font-size: 3rem;
  font-family: 'montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 1;
`


const HeroSubheader = Styled.h2`
  color: white;
  font-size: 0.75rem;
  font-family: 'montserrat', sans-serif;
  font-weight: 500i;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
`

const HeroButton = Styled(Link)`
  border: 1px solid #FF3364; 
  margin: 1rem;
  padding: 0.5rem 1rem;
  color: ${props =>
    props.magenta ? '#231F20' : '#FF3364'};
  border-radius: 0.5rem;
  background: ${props =>
    props.magenta ? '#FF3364' : 'initial'};
  text-decoration:none;
  
  `

const HeroButtonContainer = Styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:row;
    padding-top:1rem;

`

const HeroNextSection = Styled(Link)`
    position:absolute;
    bottom: 0;
    color:#FF3364;
    font-size: 0.75rem;
    padding-bottom:1rem;
    text-decoration: none;
`


class RootIndex extends React.Component {

  
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
          <HeroSection>
            <HeroContentArea>
      <HeroHeader>Jackie Ho</HeroHeader>
      <HeroSubheader>Front-End Web Developer</HeroSubheader>
      <HeroButtonContainer>
      <HeroButton to="/" magenta>See Work</HeroButton><HeroButton to="/" >About Me</HeroButton>
</HeroButtonContainer>
<HeroNextSection to="/">See Work ↧</HeroNextSection>
            </HeroContentArea>

          </HeroSection>
  
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
