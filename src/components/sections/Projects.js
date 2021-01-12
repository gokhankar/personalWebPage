import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import ReactLogo from '@images/logos/prlogoreact.png';
import GatsbyLogo from '@images/logos/prlogogatsby.png';
import PythonLogo from '@images/logos/prlogopython.png';
import PersonalLogo from '@images/logos/prlogokisisel.png';
import LinkLogo from '@images/logos/prlogomeslek.png';
import Link2Logo from '@images/logos/prlogodiger.png';


const LOGOS = [
  {
    logo: ReactLogo,
    link: 'https://gokhankaracayprojects.netlify.app/reactprojects',
  },
  {
    logo: GatsbyLogo,
    link: 'https://gokhankaracayprojects.netlify.app/gatsbyprojects',
  },
  {
    logo: PythonLogo,
    link: 'https://gokhankaracayprojects.netlify.app/pythonprojects',
  },
  {
    logo: PersonalLogo,
    link: 'https://gokhankaracayprojects.netlify.app/personalpageprojects',
  },
  {
    logo: LinkLogo,
    link: 'https://gokhankaracayprojects.netlify.app/',
  },
  {
    logo: Link2Logo,
    link: 'https://gokhankaracayprojects.netlify.app/',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="projects" accent>
        <StyledContainer>
          <div>
            <ExternalLink href='https://flamboyant-perlman-4a6dac.netlify.app/' css={"text-decoration: none; color: black;"}>
              <h1>Projelerim</h1>
            </ExternalLink>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={logo} alt="Resim" width="200px" height="80px" />
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;
  a {
    svg {
      width: 100%;
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;
  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
