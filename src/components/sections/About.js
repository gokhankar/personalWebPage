import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';


const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}

    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Hayat hızla akıyor</h2>
              <p>
                1983 Sinop doğumlu. 2006 Çukurova Ünv. İşletme mezunu. On yıl kamu kurumlarında çalıştı. İngilizce ve biraz Almanca biliyor. Şimdilerde web tasarımı ve yazılıma meraklı. Kendisini geliştirmeye çalışıyor. Evli ve iki erkek çocuk babası. Gezmeyi, yemeyi, eğlenmeyi seviyor. Gezerken fotoğraf çekmeyi de. Aslında sporu da sever ama bu aralar pek yapamıyor açıkcası. Hayatın tuhaf ve sürprizlerle dolu bir yarış olduğunu düşünüyor... Kendince bu yarışı koşmaya devam ediyor.
                </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Eğitim güzel şey</h2>
              <p>
                Çukurova Ünv. İng. İşletme mezunu(Business Administration). Kamu kurumlarında çalıştı. Web tasarıma ve internet dünyasına olan tutkusuna yenik düştü. Öğrenmenin yaşı olmadığına inanıyor. İşe yarar mı bilinmez ama BTK Akademi'den aşağıdaki sertifikalara sahip:
              </p>
              <ul style={{ listStyleType: "none" }} >
                <li >Sıfırdan İleriye Python Programlama</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT İle Web Programcılığı</li>
              </ul>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
