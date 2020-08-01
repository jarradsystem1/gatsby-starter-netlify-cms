import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Particles from 'react-particles-js';
import Heading from '../../../components/shared/heading';
import Text from '../../../components/shared/text';
import Button from '../../../components/shared/button';
import Anchor from '../../../components/shared/link';
import {
  HeroArea,
  HeroBg,
  ContetnTop,
  ContentWrapper,
  ContentBottom,
  ContentBottomInner,
  ContentBottomLeft,
  ContentBottomRight,
  ClientWrap,
  ClientItem
} from './hero.style';

const Hero = props => {
  const heroQueryData = useStaticQuery(graphql`
    query ParticleHeroDataQuery {
      homeparticledataJson(id: { eq: "particle_hero_section_content" }) {
        title
        date
        btn_link
        clients {
          id
          link
          image {
            childImageSharp {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
        bg_image {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 950, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
      allStrapiHomepage {
        edges {
          node {
            Header
            ClientDescription
          }
        }
      }
      allStrapiBadge {
        nodes {
          Logo {
            publicURL
          }
        }
      }
    }
  `);
  const homepageData = heroQueryData.allStrapiHomepage.edges[0].node;
  const badgeData = heroQueryData.allStrapiBadge.nodes;

  console.log(badgeData);

  const title = homepageData.Header;

  const heroData = heroQueryData.homeparticledataJson;
  const imageData = heroData.bg_image.childImageSharp.fluid;
  const { btn_link, clients } = heroData;
  const particleOpt = {
    particles: {
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    }
  };
  const { descStyle, headingStyle } = props;

  return (
    <HeroArea>
      <HeroBg fluid={imageData} />
      <Particles className='particle' params={particleOpt} />
      <ContentWrapper>
        <ContetnTop>
          <div className='col-3 offset-1'>
            {title && <Heading {...headingStyle}>{title}</Heading>}
            {btn_link && (
              <Button as={Link} to={btn_link} layout={2}>
                Discover More <i className='ti-arrow-right'></i>
              </Button>
            )}
          </div>
        </ContetnTop>
        <ContentBottom>
          <div className='col-4 offset-1'>
            <ContentBottomInner>
              <ContentBottomLeft>
                <Text {...descStyle} mb='0'>
                  WE'VE BUILT SOLUTIONS FOR...
                </Text>
              </ContentBottomLeft>
              <ContentBottomRight>
                {clients && (
                  <ClientWrap>
                    <ClientItem>
                      <Anchor path='/'>
                        <img src={badgeData[0].Logo.publicURL} alt='client' />
                      </Anchor>
                    </ClientItem>
                    <ClientItem>
                      <Anchor path='/'>
                        <img src={badgeData[1].Logo.publicURL} alt='client' />
                      </Anchor>
                    </ClientItem>
                    <ClientItem>
                      <Anchor path='/'>
                        <img src={badgeData[2].Logo.publicURL} alt='client' />
                      </Anchor>
                    </ClientItem>
                  </ClientWrap>
                )}
              </ContentBottomRight>
            </ContentBottomInner>
          </div>
        </ContentBottom>
      </ContentWrapper>
    </HeroArea>
  );
};

Hero.propTypes = {
  descStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  buttonStyle: PropTypes.object
};

Hero.defaultProps = {
  descStyle: {
    color: '#fff',
    fontweight: 700,
    fonSize: '18px',
    texttransform: 'uppercase',
    letterspacing: '2px',
    mb: '12px'
  },
  headingStyle: {
    as: 'h1',
    color: '#fff',
    fontSize: '48px',
    mb: '55px',
    responsive: {
      xlarge: {
        fontSize: '33px'
      },
      large: {
        fontSize: '25px',
        mb: '40px'
      },
      medium: {
        fontSize: '20px'
      }
    }
  }
};

export default Hero;
