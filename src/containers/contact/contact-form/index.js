import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../../../components/shared/heading';
import Text from '../../../components/shared/text';
import Button from '../../../components/shared/button';
import Form, { Input, Textarea } from '../../../components/shared/form';
import Image from '../../../components/image';
import {
  ContactSectionWrap,
  BannerArea,
  ContactFormWrap,
  ContactForm
} from './contact-form.stc';
import { device } from '../../../theme';
import styled from 'styled-components';

const ContactFormSection = ({
  headingStyle,
  textStyle,
  inputStyle,
  textareaStyle
}) => {
  const bannerQueryData = useStaticQuery(graphql`
    query ContactBannerQuery {
      pagedataJson(id: { eq: "contact_page_data" }) {
        title
        subtitle
        banner_img {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
      allStrapiBanners {
        nodes {
          id
          Contact {
            publicURL
          }
        }
      }
    }
  `);
  const { title, subtitle } = bannerQueryData.pagedataJson;
  const imageData =
    bannerQueryData.pagedataJson.banner_img.childImageSharp.fluid;
  return (
    <ContactSectionWrap>
      <div className='row align-items-center'>
        <div className='col-2'>
          <BannerArea id='contact-form-banner'>
            <BannerImg
              location={
                bannerQueryData.allStrapiBanners.nodes[0].Contact.publicURL
              }
            />
          </BannerArea>
        </div>
        <div className='col-2 offset-1'>
          <ContactFormWrap>
            <div className='rn-project-meta-inner'>
              {title && <Text {...textStyle}>{title}</Text>}
              {subtitle && <Heading {...headingStyle}>{subtitle}</Heading>}
            </div>
            <ContactForm>
              <Form>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  halfwidth
                  {...inputStyle}
                />
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Your Email'
                  halfwidth
                />
                <Textarea
                  name='message'
                  placeholder='Messages'
                  {...textareaStyle}
                />
                <Button type='submit'>Send Now</Button>
              </Form>
            </ContactForm>
          </ContactFormWrap>
        </div>
      </div>
    </ContactSectionWrap>
  );
};

export const BannerImg = styled.div`
  background: url(${props => props.location});
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center center !important;
  min-height: 70vh;
  padding: 130px 0;
  display: flex;
  align-items: center;
  & > .row {
    flex-wrap: nowrap;
    @media ${device.small} {
      flex-wrap: wrap;
    }
  }
  @media ${device.xlarge} {
    .col-1.offset-1 {
      margin-left: 0;
    }
  }
  @media ${device.medium} {
    .col-1.offset-1 {
      margin-left: 20vw;
    }
  }
  @media ${device.small} {
    min-height: 450px;
    padding-top: 150px;
    .col-1.offset-1 {
      margin-left: 10vw;
    }
  }
  &.gatsby-image-wrapper {
    z-index: -1;
  }
`;

ContactFormSection.propTypes = {
  headingStyle: PropTypes.object,
  textStyle: PropTypes.object,
  textareaStyle: PropTypes.object
};

ContactFormSection.defaultProps = {
  headingStyle: {
    fontSize: '40px',
    lineHeight: '55px',
    color: 'primary',
    fontweight: 600,
    responsive: {
      medium: {
        fontSize: '24px',
        lineHeight: 'initial'
      }
    }
  },
  textStyle: {
    as: 'span',
    color: '#000000',
    fontweight: 500,
    fontSize: '16px',
    texttransform: 'uppercase',
    letterspacing: '1px',
    display: 'inline-block',
    mb: '17px',
    lineHeight: 1,
    responsive: {
      medium: {
        fontSize: '12px',
        mb: '10px'
      }
    }
  },
  inputStyle: {
    responsive: {
      xsmall: {
        mb: '20px'
      }
    }
  },
  textareaStyle: {
    mt: '40px',
    mb: '40px',
    responsive: {
      xsmall: {
        mt: '25px',
        mb: '25px'
      }
    }
  }
};

export default ContactFormSection;
