import React,{useEffect} from 'react'
import Dashboard from '../../../components/admin/Dashboard';
import Profile from '../../../components/profile/ProfileComponent';
import {isAuth,getCookie,logout} from '../../../actions/auth';
import Router from 'next/router';
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../../../config";

const adminprofile = () => {

    const head = () => (
      <Head>
          <title>Profile Page | {API_NAME}</title>
          <meta name="description"/>
          <link rel="canonical" href={`${DOMAIN}/admin/profile`} />
          <meta property="og:title" content={`Profile Page | ${API_NAME}`} />
          <meta name="og:description" content="This is the Profile Page of admin" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${DOMAIN}/admin/profile`} />
          <meta property="og:site_name" content={`${API_NAME}`} />
          <meta property="og:image:secure_url" />
          <meta property="og:image:type" content={"image/jpg"} />
      </Head>
  )
  const token = getCookie('token');

    // token expiry protection and user protection
    useEffect(() => {
     if (!isAuth()){
        Router.push('/');
    }  
  },[])


      // page protection 2nd phase
      if (isAuth() && isAuth().role === 'Customer'){
        Router.push('/customer');
    }
    else  if (isAuth() && isAuth().role === 'Shopper'){
        Router.push('/shopper');
    }
    else  if (isAuth() && isAuth().role === 'Dealer'){
        Router.push('/dealer');
    }

    return (
        <React.Fragment>
          {head()}
            <Dashboard>
            <div className="canvas">
                    <h1 className="heading1">User Profile</h1>
            </div><br/>
     
            <p style={{marginLeft: "50px"}}><Profile/></p>
                
            </Dashboard>
              <footer className="page-footer" style={{backgroundColor: '#757575'}}>
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

export default adminprofile
