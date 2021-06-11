import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import {logout} from "../../actions/auth";
import Router, {withRouter} from "next/router";
import {API_NAME} from '../../config';
import Navbar from "../Navbar";
import '../../static/css/Sidenav1.css';
import dynamic from 'next/dynamic';
// const DynamicContent = dynamic(() => 
//     import('../../styles/Sidenav1.css'))


const Sidenav = () => {

  return (
    <>
     <div className="main-menu">
        <ul>
            <section className="logo">
              <h4 style={{marginTop: '35px'}}><strong>{API_NAME}</strong></h4>
            </section><br/>
            <section className="home">
              <li className="menu-item">
                  <i className="fas fa-home"></i>&nbsp;&nbsp;&nbsp;
                  <span className="items">
                    <Link href="/dealer">
                        Dashboard
                    </Link>
                  </span>
                </li>
            </section>
            <section className="links">
                <li className="menu-item">
                  <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;
                  <span className="items">
                    <Link href="/profile">
                        Profile
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
    </>
  );
};

 
export default withRouter(Sidenav);