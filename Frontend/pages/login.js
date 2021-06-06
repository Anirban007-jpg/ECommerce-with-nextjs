import React from 'react'
import LoginComponent from '../components/auth/LoginComponent'
import Layout from '../components/Layout';
  
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const login = () => {

    const head = () => (
        <Head>
            <title>Login Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/login`} />
            <meta property="og:title" content={`Login Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Login Page" />
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
                    <br />
                    <br/>
                    <br/>
                    <h2 className="text-center">Sign in to start your Session</h2><br/>
                    <div className="mr-3 ml-3 pr-3 pl-3">
                        <LoginComponent />
                    </div>
            </Layout>
        </React.Fragment>
    )
}

export default login;
