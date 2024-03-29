import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "profile" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text style={{ fontFamily: 'Special Elite' }}>
              <h1 style={{ fontFamily: 'Special Elite' }}>
                Gökhan Karaçay
                {/* <br />
                kişisel web sitesi */}
              </h1>
              <div className="underline"> </div>
              <br />
              <p>
                {' '}
                Mobil uygulamalar ve web uygulamaları geliştiriyor. Javascript,
                React ve React Native ile meşgul, bu ve benzeri teknolojilere
                meraklı. Gezmeyi, yemeyi, fotoğraf çekmeyi sever. İnsanı sever,
                hayvanı sever, doğayı sever. Fani, baba, eş.
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  /* padding-top: 96px; */
  padding-top: 40px;

  @media (max-width: ${props => props.theme.screen.md}) {
    /* padding-top: 128px; */
    padding-top: 80px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  margin-top: -40;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    /* grid-gap: 80px; */
    grid-gap: 20px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

// const StyledExternalLink = styled(ExternalLink)`
//   color: inherit;
//   text-decoration: none;

//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
// `;

export default Header;
