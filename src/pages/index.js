import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Hero from "../containers/home-particle/hero";
import Story from "../containers/home-particle/story";
import TestimonialSection from "../containers/home-particle/testimonial";
import ClientSection from "../containers/home-particle/clients";

export default () => (
  <Layout>
    <SEO title="Home - Particle" />
    <Hero />
    <Story />
    <TestimonialSection />
    <ClientSection />
  </Layout>
);
