import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as ReactLogo } from '@images/logos/react.svg';
import { ReactComponent as GatsbyLogo } from '@images/logos/gatsby.svg';
import { ReactComponent as PythonLogo } from '@images/logos/python.svg';
import { ReactComponent as PersonalLogo } from '@images/logos/personal.svg';
import { ReactComponent as LinkLogo } from '@images/logos/link.svg';
import { ReactComponent as Link2Logo } from '@images/logos/link2.svg';


const LOGOS = [
  {
    logo: ReactLogo,
    link: 'https://ao',
  },
  {
    logo: GatsbyLogo,
    link: 'https://g',
  },
  {
    logo: PythonLogo,
    link: 'https://py',
  },
  {
    logo: PersonalLogo,
    link: 'https://dsfrg',
  },
  {
    logo: LinkLogo,
    link: 'https://nsadm',
  },
  {
    logo: Link2Logo,
    link: 'https://insdfom',
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
            <h1>Projelerim</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
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