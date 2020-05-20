import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Banner from "../containers/company/banner";
import Awwards from "../containers/company/awwards";
import AwwardsWin from "../containers/company/awwards/index1";
import AwwardsWinner from "../containers/company/awwards/index2";
import StoryService from "../containers/home-particle/story/story-serivce";

export default () => (
  <Layout>
    <SEO title="Service" />
    <Banner />
    <StoryService />
    <Awwards />
    <AwwardsWin />
    <AwwardsWinner />
  </Layout>
);
