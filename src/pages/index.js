import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Styled from '@emotion/styled'
// import { Link } from 'gatsby'
import Hero from '../images/hero-image-1.png'
import Footer from '../components/footer'
import ArticlePreview from '../components/article-preview'

const HeroSection = Styled.section`
  height: calc(100vh - 64px);
  background: url(${Hero}) center center;
  background-size:cover;
  max-width: 100vw;
  z-index: 100;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  @media (min-width: 768px) {
    align-items:start;
  }
`
const HeroContentArea = Styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position:relative;
  text-align:center;
  padding: 1rem;
  @media (min-width: 768px) {
    align-items:start;

  }

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
  
  @media (min-width: 768px) {
    font-size: 6rem;
  }
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

// const HeroButton = Styled(Link)`
// border: ${props =>
//   props.magenta ? 'none' : '1px solid white;'};
//   margin: 1rem;
//   padding: 0.5rem 1rem;
//   color: ${props =>
//     props.magenta ? '#231F20' : 'white'};
//   border-radius: 0.5rem;
//   background: ${props =>
//     props.magenta ? '#36DBCA' : 'initial'};
//   text-decoration:none;
//   `

const HeroButtonContainer = Styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction:row;
  padding-top:1rem;

`

// const HeroNextSection = Styled(Link)`
//   color:#36DBCA;
//   font-size: 0.75rem;
//   padding-bottom:1rem;
//   text-decoration: none;
//   position: absolute;
//   bottom: 0;
//   padding-bottom: 2rem;
// `

const Section = Styled.section`
  background-color: white;
  max-width: 100vw;
  z-index: 100;
  min-height: 100vh;
  display:flex;
  justify-content: top;
  align-items: center;
  padding: 1rem;
  flex-direction:column;
`

const Header = Styled.h1`
  color: #231F20;
  font-size: 3rem;
  font-family: 'montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  padding: 2rem;
  line-height: 1;
`

const Highlight = Styled.span`
    color: #36DBCA;
`

class RootIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jackie Ho | Front-End Developer & Designer</title>
          <meta name="description" content="Helmet application"></meta>
        </Helmet>
          <HeroSection>
              <HeroContentArea>
                  <HeroSubheader>Hi I'm</HeroSubheader>
                  <HeroHeader>Jackie Ho</HeroHeader>
                  <HeroSubheader><Highlight>Digital Product Designer</Highlight> &nbsp;Based In Vancouver, BC
                  </HeroSubheader>
                  <HeroButtonContainer>
                      {/* <HeroButton to="/">See Work</HeroButton><HeroButton to="/" >About Me</HeroButton> */}
                  </HeroButtonContainer>
                  {/* <HeroNextSection to="/">Get To Know Me ↧</HeroNextSection> */}
              </HeroContentArea>
          </HeroSection>
          <Section>
          <Header>Things That I Help With</Header>
          </Section>
          <Section>
              <Header>Recent Projects</Header>
              <div className="wrapper" data-sal="slide-up" data-sal-delay="250" data-sal-duration="1000" data-sal-easing="ease">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
          </Section>
          <Footer/>

      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(limit: 3, filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
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
  }
`