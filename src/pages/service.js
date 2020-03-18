import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner' 

export default () => (
    <Layout>
        <SEO title="Service"/>
        <Banner/>
       <div>
       <h2 className="text-center">Services</h2>
        <hr/> 
        <h1 className="text-center">Coming Soon</h1>
       </div>
    </Layout>
)
