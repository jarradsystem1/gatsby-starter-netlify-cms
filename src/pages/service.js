import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Banner from "../containers/company/banner";
import About from "../containers/company/about";
import Story from "../containers/home-particle/story";
import TestimonialSection from "../containers/company/testimonial";
import ClientSection from "../containers/home-particle/clients";

export default () => (
  <Layout>
    <SEO title="Service" />
    <Banner />
    <Story />
    <TestimonialSection />
    <ClientSection />
    <About />
  </Layout>
);
