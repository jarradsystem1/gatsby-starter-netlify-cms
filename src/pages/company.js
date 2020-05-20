import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner'
import About from '../containers/company/about'
import JoinOurTeam from '../containers/company/join-our-team'
import TestimonialSection from "../containers/home-particle/testimonial";

export default () => (
    <Layout>
        <SEO title="Company"/>
        <Banner/>
        <About/>
        <JoinOurTeam/>
        <TestimonialSection />
    </Layout>
)
