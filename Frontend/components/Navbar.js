import {useState, useEffect} from 'react';
import '../node_modules/antd/dist/antd.css';
import {withRouter} from "next/router";
import Router from 'next/router';
import Link from 'next/link';
import {API_NAME} from '../config.js';
import nProgress from 'nprogress';
import "../node_modules/nprogress/nprogress.css";
import {isAuth, logout} from "../actions/auth";

Router.onRouteChangeStart = url => nProgress.start();
Router.onRouteChangeComplete = url => nProgress.done();
Router.onRouteChangeError = url => nProgress.done();



const styleChange = (router,key) => {
    if (router.pathname === key){
      return {color:"grey" , fontWeight: "bolder"}
    }else{
      return;
    }
}

const Navbar = ({router}) => {

    return (
      <div>
          <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuth() && isAuth().role === "Dealer" && (
               <Link className="navbar-brand" href="/dealer">
                  <strong>
                    <a style={{fontSize: '30px',color: "black"}}>{API_NAME}</a>
                  </strong>
                </Link>
            )}
            {isAuth() && (
              <li className="nav-item">
                <span className="nav-link" style={{cursor: 'pointer', color: "black"}} onClick={() => logout(() => {Router.push('/')})} href="">
                  <strong>
                    Logout
                  </strong>  
                </span>  
              </li>
            )}

            {!isAuth() && (
              <>
                <Link className="navbar-brand" href="/" >
                  <strong>
                    <a style={{fontSize: '30px',color: "black"}}>{API_NAME}</a>
                  </strong>
                </Link>
              
               <li className="nav-item">
                   <Link className="nav-link" href="/register">
                        <a style={styleChange(router,"/register")}>Register</a> 
                    </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" href="/login">
                        <a style={styleChange(router,"/login")}>Login</a> 
                    </Link>
                </li>
                                  
              </>      
                              
            )}
            </ul>
            </div>    
             </div>
          </nav>
          </div>
    )
}

export default withRouter(Navbar);
