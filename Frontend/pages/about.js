import Layout  from "../components/Layout"
import React from "react"
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const about = () => {

    const head = () => (
        <Head>
            <title>About Us Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/about`} />
            <meta property="og:title" content={`About Us Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the landing Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/about`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    return (
        <React.Fragment>
            {head()}
            <Layout>
           
                <div>
                    <p>This Page will be designed Later</p>
                </div>
              
            </Layout>
        </React.Fragment>
    )
}
  
export default about