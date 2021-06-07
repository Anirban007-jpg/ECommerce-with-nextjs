import React from 'react'
import RegisterComponent from '../components/auth/RegisterComponent';
import Layout from '../components/Layout';
  
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const register = () => {

    const head = () => (
        <Head>
            <title>Register Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/register`} />
            <meta property="og:title" content={`Register Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Registration Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

  
        
    // style={{ padding: '4rem 2rem',marginBottom: '2rem',backgrounColor: 'var(--bs-light)',borderRadius: '.3rem', textAlign: 'center', background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',animation: 'gradient 1s ease infinite', backgroundSize: '400% 400%' }}
    return (
        <React.Fragment>
            {head()}
            <Layout>
                        <div className="canvas">
                            <h2 className="heading1">Registration Form</h2>
                    </div><br/>
                    <div className="mr-3 ml-3 pr-3 pl-3">
                        <RegisterComponent />
                    </div>
            </Layout>
        </React.Fragment>
    )
}

export default register;
