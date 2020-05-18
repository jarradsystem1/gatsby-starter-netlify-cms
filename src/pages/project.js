import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Story from "../containers/home-particle/story";
import Banner from "../containers/company/banner";
import About from "../containers/company/about";
import Awwards from "../containers/company/about/awwards";

export default () => (
  <Layout>
    <SEO title="Project" />
    <Banner />
    <Story />
    <Awwards />
    <Awwards />
    <Awwards />
  </Layout>
);
