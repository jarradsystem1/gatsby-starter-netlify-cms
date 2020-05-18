import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Banner from "../containers/company/banner";
import Story from "../containers/home-particle/story";
import Awwards from "../containers/company/about/awwards";

export default () => (
  <Layout>
    <SEO title="Service" />
    <Banner />
    <Story />
    <Awwards />
    <Awwards />
    <Awwards />
  </Layout>
);
