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
                    <div>
                        <RegisterComponent />
                    </div>
                  </Layout>
            <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "20px"}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text"></h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text"></h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright" style={{backgroundColor: '#212121'}}>
            <div className="container">
            © 2021 Copyright Amazonia
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </React.Fragment>
    )
}

export default register;
