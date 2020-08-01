import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../../theme';

const Banner = () => {
  const bannerQueryData = useStaticQuery(graphql`
    query CompanyBannerQuery {
      pagedataJson(id: { eq: "company_page_data" }) {
        banner_img {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 750, quality: 100) {
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
          About {
            publicURL
          }
        }
      }
    }
  `);
  const imageData =
    bannerQueryData.pagedataJson.banner_img.childImageSharp.fluid;
  return (
    <div className='banner-area'>
      <BannerImg
        location={bannerQueryData.allStrapiBanners.nodes[0].About.publicURL}
      />
    </div>
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

export default Banner;
