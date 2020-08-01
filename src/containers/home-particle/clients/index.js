import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import SectionTitle from '../../../components/shared/section-title';
import ClientList, { Client } from '../../../components/client-list';
import {
  ClientSectionWrap,
  ClientWrap,
  ClientLeft,
  ClientRight
} from './clients.stc';

const ClientSection = ({ section }) => {
  const clientQueryData = useStaticQuery(graphql`
    query ParticleClientQuery {
      homeparticledataJson(id: { eq: "particle_clients_section_content" }) {
        title
        subtitle
      }
      allClientsJson(limit: 6) {
        edges {
          node {
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
        }
      }
      allStrapiHomepage {
        nodes {
          ClientDescription
        }
      }
      allStrapiClient {
        nodes {
          Name
          Logo {
            publicURL
          }
          id
        }
      }
    }
  `);
  const clientSecData = clientQueryData.homeparticledataJson;
  const clients = clientQueryData.allStrapiClient.nodes;
  const clientIntroText = clientQueryData.allStrapiHomepage.nodes[0];

  return (
    <ClientSectionWrap {...section}>
      <div className='row align-items-center'>
        <div className='col-4 offset-1'>
          <ClientWrap>
            <ClientLeft>
              <SectionTitle
                title={clientIntroText.ClientDescription}
                subtitle={clientSecData.subtitle}
              />
            </ClientLeft>
            <ClientRight>
              <ClientList>
                {clients.map((client, i) => (
                  <Client
                    key={`client-${i}`}
                    link={'/project'}
                    client_image={client.Logo.publicURL}
                  />
                ))}
              </ClientList>
            </ClientRight>
          </ClientWrap>
        </div>
      </div>
    </ClientSectionWrap>
  );
};

ClientSection.propTypes = {
  paragraph: PropTypes.object
};

ClientSection.defaultProps = {
  section: {
    backgroundColor: '#f8f8f8'
  }
};

export default ClientSection;
