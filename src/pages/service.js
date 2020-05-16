import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Banner from "../containers/company/banner";
import About from "../containers/company/about";
import Story from "../containers/home-particle/story";

export default () => (
  <Layout>
    <SEO title="Service" />
    <Banner />
    <Story />
    <Story />
    <Story />
    <About />
  </Layout>
);
