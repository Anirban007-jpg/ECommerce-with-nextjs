import React,{useEffect} from 'react'
import {isAuth} from "../../actions/auth";
import Router from 'next/router'
import Dashboard from '../../components/dealer/Dashboard';
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../../config";

const index = () => {

      const head = () => (
          <Head>
              <title>Dashboard | {API_NAME}</title>
              <meta name="description"/>
              <link rel="canonical" href={`${DOMAIN}/dealer`} />
              <meta property="og:title" content={`Dashboard Page | ${API_NAME}`} />
              <meta name="og:description" content="This is the Dashboard Page of dealer" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={`${DOMAIN}/dealer`} />
              <meta property="og:site_name" content={`${API_NAME}`} />
              <meta property="og:image:secure_url" />
              <meta property="og:image:type" content={"image/jpg"} />
          </Head>
      )
    // page protection
    useEffect(() => {
        if (!isAuth()){
            Router.push('/');
        }
     }, [])


    if (!process.browser){
      return null;
    }

    // page protection 2nd phase
    if (isAuth() && isAuth().role === 'Customer'){
        Router.push('/customer',null,{shallow:true});
    }
    else  if (isAuth() && isAuth().role === 'Shopper'){
        Router.push('/shopper');
    }
    else  if (isAuth() && isAuth().role === 'Admin'){
        Router.push('/admin');
    }

    



    return (
        <React.Fragment>
          {head()}
            <Dashboard>
                <div className="canvas">
                    <h1 className="heading1">Dealer Dashboard</h1>
                </div>
            </Dashboard>

            <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "750px"}}>
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

export default index
