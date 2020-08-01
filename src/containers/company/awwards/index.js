import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../../../components/shared/heading';
import Text from '../../../components/shared/text';
import { AboutSectionWrap, ProjectTypeList } from './awwards.stc';

const Awwards = ({ ProjectTypeHeading, ProjectTypeText }) => {
  const AwwardsQueryData = useStaticQuery(graphql`
    query AboutWinDataQuery {
      aboutdataJson(id: { eq: "awwards-1" }) {
        id
        featured_work {
          id
          title
          achivments
        }
      }
      allStrapiService(limit: 4) {
        nodes {
          Title
          Description
        }
      }
    }
  `);

  const strapiServices = AwwardsQueryData.allStrapiService.nodes;

  const { featured_work } = AwwardsQueryData.aboutdataJson;
  const delay = [200];
  return (
    <AboutSectionWrap>
      {featured_work && (
        <div className='row section-pt-md'>
          <div className='col-4 offset-1'>
            <div className='content row'>
              {strapiServices.map((service, i) => {
                const points = service.Description.split(',');
                delay.push(delay[i] + 200);
                return (
                  <div
                    key={service.id}
                    className='col-1 project-type wow fadeInLeft'
                    data-wow-delay={`${delay}ms`}
                    data-wow-duration='1000ms'
                  >
                    {service.Title && (
                      <Heading {...ProjectTypeHeading}>{service.Title}</Heading>
                    )}
                    {service.Description && (
                      <ProjectTypeList>
                        {points.map((achiv, j) => (
                          <li key={`${service.id}-${j}`}>
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

Awwards.propTypes = {
  HeadingStyle: PropTypes.object,
  TextStyle: PropTypes.object
};

Awwards.defaultProps = {
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

export default Awwards;
