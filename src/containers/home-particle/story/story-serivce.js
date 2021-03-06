import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SectionTitle from '../../../components/shared/section-title';
import Text from '../../../components/shared/text';
import Button from '../../../components/shared/button';
import {
  StorySection,
  StoryInner,
  Content,
  StoryImgWrap,
  StoryImage
} from './story.stc';
import { Controller, Scene } from 'react-scrollmagic';

const StoryService = ({ section, paragraph, paragraphTwo, button, image }) => {
  const storyQueryData = useStaticQuery(graphql`
    query ServicestoryDataQuery {
      homeparticledataJson(
        id: { eq: "particle_story_section_contnet_service" }
      ) {
        id
        title
        subtitle
        path
        content
        image {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 950, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
      allStrapiOurStory {
        nodes {
          Header
          Image {
            publicURL
          }
          Story
        }
      }
    }
  `);
  const storyData = storyQueryData.homeparticledataJson;
  const { title, subtitle, path, content } = storyData;
  const imageData = storyData.image.childImageSharp.fluid;

  const strapiStory = storyQueryData.allStrapiOurStory.nodes[0];

  const paragraphs = strapiStory.Story.split(/\r?\n/);

  return (
    <StorySection {...section}>
      <div className='row'>
        <div className='col-1 offset-1'>
          <div id='trigger' />
          <Controller>
            <Scene
              classToggle='animated'
              triggerElement='#trigger'
              triggerHook='onCenter'
            >
              <StoryImgWrap className='rn_surface story-image'>
                <StoryImage src={strapiStory.Image.publicURL} />
              </StoryImgWrap>
            </Scene>
          </Controller>
        </div>
        <div className='col-2 offset-1'>
          <StoryInner>
            <SectionTitle title={strapiStory.Header} subtitle={subtitle} />
            <Content>
              {paragraphs.map(
                (textData, i) =>
                  textData != '' && (
                    <Text key={`story-text-${i}`} {...paragraph}>
                      {textData}
                    </Text>
                  )
              )}
              <Button as={Link} to={path} {...button}>
                DISCOVER MORE
              </Button>
            </Content>
          </StoryInner>
        </div>
      </div>
    </StorySection>
  );
};

StoryService.propTypes = {
  paragraph: PropTypes.object,
  paragraphTwo: PropTypes.object,
  button: PropTypes.object,
  section: PropTypes.object,
  image: PropTypes.object
};

StoryService.defaultProps = {
  section: {
    backgroundColor: '#f8f8f8'
  },
  paragraph: {
    color: '#000000',
    fontSize: '14px',
    lineHeight: '26px'
  },
  paragraphTwo: {
    mt: '31px'
  },
  button: {
    mt: '34px'
  },
  image: {
    backgroundPosition: '-78px 0px'
  }
};

export default StoryService;
