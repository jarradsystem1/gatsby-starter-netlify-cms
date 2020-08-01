import React from 'react';
import SEO from '../components/seo';
import Layout from '../containers/layout/layout';
import Banner from '../containers/company/banner';
import StoryProjects from '../containers/home-particle/story/story-project1';

import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const projectData = useStaticQuery(graphql`
    query ProjectData {
      allStrapiProject {
        nodes {
          Type
          Title
          Description
          Image {
            publicURL
          }
        }
      }
    }
  `);

  const projectList = projectData.allStrapiProject.nodes;

  if (projectList.length > 0) {
    return (
      <Layout>
        <SEO title='Project' />
        <Banner />
        {projectList.map(project => (
          <StoryProjects
            type={project.Type}
            title={project.Title}
            description={project.Description}
            image={project.Image.publicURL}
          />
        ))}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <SEO title='Project' />
        <Banner />
        <h1>No Projects Displayed Yet...</h1>
      </Layout>
    );
  }
};
