import Layout  from "../components/Layout"
import React from "react"
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const HomePage = () => {

    const head = () => (
        <Head>
            <title>Home Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`Home Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the landing Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    return (
        <React.Fragment>
            {head()}
            <Layout>
                Welcome to Amazonia! Home Page yet to be designed
            </Layout>
        </React.Fragment>
    )
}
  
export default HomePage