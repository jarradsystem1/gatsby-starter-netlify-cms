import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Banner from "../containers/company/banner";
import StoryProjects from "../containers/home-particle/story/story-project1";
import StoryProjectes from "../containers/home-particle/story/story-project2";
import StoryProjectseem from "../containers/home-particle/story/story-project";

export default () => (
  <Layout>
    <SEO title="Project" />
    <Banner />
    <StoryProjects />
    <StoryProjectes />
    <StoryProjectseem />
  </Layout>
);
