import Layout  from "../components/Layout"
import React from "react"
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const contact = () => {

    const head = () => (
        <Head>
            <title>Contact Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/contact`} />
            <meta property="og:title" content={`Conatct Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Contact Page" />
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
                <div className="canvas">
                    <h1><strong>AMAZONIA - Amazon Clone</strong></h1>
                    <p className="lead text-bold">This is the contact page so that you can contact with the website</p>
                </div>
                <div>
                    <p>This Page will be designed Later</p>
                </div>
              
            </Layout>
        </React.Fragment>
    )
}
  
export default contact