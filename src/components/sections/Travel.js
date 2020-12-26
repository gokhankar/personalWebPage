import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';


const TEAM = [
  {
    name: 'Almanya',
    image: 'geziberlin.jpg',
    city: 'Hamburg, Berlin',
    link: "http://asd"
  },
  {
    name: 'Fransa',
    image: 'geziparis.jpg',
    city: 'Paris, Bordeaux, Marsilya',
    link: "http://asd"
  },
  {
    name: 'İspanya',
    image: 'gezibarselona.jpg',
    city: 'Madrit, Barselona',
    link: "http://asd"
  },  
  {
    name: 'İtalya',
    image: 'geziroma.jpg',
    city: 'Roma, Venedik',
    link: "http://asd"
  },
  {
    name: 'Hırvatistan',
    image: 'gezizagrep.jpg',
    city: 'Zagrep, Split, Dubrovnik',
    link: "http://asd"
  },
  {
    name: 'Kuzey Avrupa',
    image: 'gezioslo.jpg',
    city: 'Oslo, Stockholm, Helsinki',
    link: "http://asd"
  },
];

const Travel = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "travel" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "open_map" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="travel" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Gezilerim</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, city, link }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={image}>
                  <ExternalLink href={link}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{city}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;
  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Travel;