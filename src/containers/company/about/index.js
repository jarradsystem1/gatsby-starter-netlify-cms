import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../../../components/shared/heading';
import Text from '../../../components/shared/text';
import {
  AboutSectionWrap,
  SectionTitle,
  AboutContent,
  ProjectTypeList
} from './about.stc';

const About = ({
  HeadingStyle,
  TextStyle,
  ProjectTypeHeading,
  ProjectTypeText
}) => {
  const aboutQueryData = useStaticQuery(graphql`
    query AboutDataQuery {
      aboutdataJson(id: { eq: "about-intro-content" }) {
        id
        title
        desc
        content
        featured_work {
          id
          title
          achivments
        }
      }
      allStrapiAboutUs {
        nodes {
          Description
          Intro
        }
      }
      allStrapiAward {
        nodes {
          Name
          Accolades
        }
      }
    }
  `);
  const { title, desc, content, featured_work } = aboutQueryData.aboutdataJson;

  const strapiAboutUs = aboutQueryData.allStrapiAboutUs.nodes[0];
  const strapiAwards = aboutQueryData.allStrapiAward.nodes;

  const delay = [200];
  return (
    <AboutSectionWrap>
      <div className='row'>
        {(strapiAboutUs.Intro || strapiAboutUs.Description) && (
          <div className='col-1 offset-1'>
            <SectionTitle>
              {title && <Heading {...HeadingStyle}>{title}</Heading>}
              {desc && <Text {...TextStyle}>{strapiAboutUs.Intro}</Text>}
            </SectionTitle>
          </div>
        )}
        {content && (
          <div className='col-2 offset-1'>
            <AboutContent>
              <Text>{strapiAboutUs.Description}</Text>
            </AboutContent>
          </div>
        )}
      </div>
      {strapiAwards.length > 0 && (
        <div className='row section-pt-md'>
          <div className='col-4 offset-1'>
            <div className='content row'>
              {strapiAwards.map((work, i) => {
                const accolades = work.Accolades.split(',');
                delay.push(delay[i] + 200);
                return (
                  <div
                    key={i}
                    className='col-1 project-type wow fadeInLeft'
                    data-wow-delay={`${delay}ms`}
                    data-wow-duration='1000ms'
                  >
                    {work.Name && (
                      <Heading {...ProjectTypeHeading}>{work.Name}</Heading>
                    )}
                    {accolades && (
                      <ProjectTypeList>
                        {accolades.map((achiv, j) => (
                          <li key={`${work.id}-${j}`}>
                            <Text {...ProjectTypeText}>{achiv}</Text>
                          </li>
                        ))}
                      </ProjectTypeList>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </AboutSectionWrap>
  );
};

About.propTypes = {
  HeadingStyle: PropTypes.object,
  TextStyle: PropTypes.object
};

About.defaultProps = {
  HeadingStyle: {
    fontSize: '40px',
    texttransform: 'capitalize',
    lineHeight: '55px',
    color: 'primary',
    fontweight: 600,
    responsive: {
      medium: {
        fontSize: '24px',
        lineHeight: 'initial'
      },
      small: {
        fontSize: '25px',
        lineHeight: '35px'
      }
    }
  },
  TextStyle: {
    lineHeight: '26px'
  },
  ProjectTypeHeading: {
    as: 'h6',
    color: 'primary',
    fontSize: '12px',
    fontweight: 700,
    letterspacing: '2px',
    mb: '12px'
  },
  ProjectTypeText: {
    m: 0,
    fontSize: '12px',
    color: '#000000',
    letterspacing: '1px'
  }
};

export default About;
