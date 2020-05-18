import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Story from "../containers/home-particle/story";
import Banner from "../containers/company/banner";

export default () => (
  <Layout>
    <SEO title="Project" />
    <Banner />
    <Story />
    <Story />
    <Story />
  </Layout>
);
