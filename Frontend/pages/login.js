import React from 'react'
import LoginComponent from '../components/auth/LoginComponent'
import Layout from '../components/Layout';
import {withRouter} from 'next/router';
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const login = ({router}) => {

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

   
    const showRedirectedMessage = () => {
        if (router.query.message){
            return <div className="alert alert-danger">{router.query.message}</div>
        }else{
            return;
        }
    }

    return (
        <React.Fragment>
            {head()}

                    <div className="canvas">
                        <h2>Log In and Start Your Session</h2>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-12">{showRedirectedMessage()}</div>
                    </div><br/>
                    <div className="mr-3 ml-3 pr-3 pl-3">
                        <LoginComponent />
                    </div>
            <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "30px"}}>
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

export default withRouter(login);
