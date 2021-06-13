import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import {logout} from "../../actions/auth";
import Router, {withRouter} from "next/router";
import {API_NAME} from '../../config';
import '../../static/css/Sidenav.css';
import dynamic from 'next/dynamic';


const styleChange = (router,key) => {
  if (router.pathname === key){
    return {backgroundColor: '#ceecee', transition: "0.5s ease"}
  }else{
    return;
  }
}

const Sidenav = ({router}) => {



  return (
      <div className="main-menu">
      <ul>
          <section className="logo">
            <h4 style={{marginTop: '35px'}}><strong>{API_NAME}</strong></h4>
          </section><br/>
          <section className="home">
            <li className="menu-item" style={styleChange(router, "/dealer")}>
                <a href="/dealer"><i className="fas fa-home"></i></a>&nbsp;&nbsp;&nbsp;
                <span className="items" >
                  <Link href="/dealer" >
                      <a style={{color: 'black', fontWeight: '700'}}>
                        Dashboard
                      </a>
                  </Link>
                </span>
              </li>
          </section>
          <section className="links">
              <li className="menu-item" style={styleChange(router, "/dealer/profile")}>
                <a href="/dealer/profile"><i className="fas fa-user"></i></a>&nbsp;&nbsp;&nbsp;
                <span className="items">
                  <Link href="/dealer/profile">
                    <a style={{color: 'black', fontWeight: '700'}}>
                      Profile
                    </a>
                  </Link>
                </span>
              </li>
              <li className="menu-item" onClick={() => logout(() => {Router.replace('/')})}>
                <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;&nbsp;
                <span className="items">
                      Logout
                </span>
              </li>
              
          </section>
          
          <section className="profile_content">

          </section>
      </ul>
  </div>
    );
  
};

 
export default withRouter(Sidenav);