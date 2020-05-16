import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import TestimonialSection from "../containers/company/testimonial";
import ClientSection from "../containers/home-particle/clients";
import Story from "../containers/home-particle/story";

export default () => (
  <Layout>
    <SEO title="Project" />
    <Story />
    <TestimonialSection />
    <ClientSection />
  </Layout>
);
