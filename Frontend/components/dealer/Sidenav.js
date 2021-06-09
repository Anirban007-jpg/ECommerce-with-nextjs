import React,{useState, useEffect} from 'react';
import cn from 'classnames';
import Link from 'next/link';
import {logout} from "../../actions/auth";
import Router, {withRouter} from "next/router";


const Sidenav = ({toggleMenu, router}) => {

  const classes = cn(
    'ui', 'sidebar','overlay','left','inverted', 'menu', 'animating','wide',
    {'visible' : toggleMenu}
  );

  return (
    <>
    <div className={classes}>
      <ul>
      <li style={{marginTop: "20px", marginBottom: "20px"}}>
          <span className="" style={{fontSize: "1.2rem"}}><i class="fas fa-home"></i></span>&nbsp;&nbsp;
          <span style={{padding: "1rem .5rem", fontSize: "1.2rem"}}>
            <Link href="/dealer">   
              <a>
                Home
              </a>
            </Link>
          </span>
        </li>
        <li style={{marginTop: "20px", marginBottom: "20px"}}>
          <span className="" style={{fontSize: "1.2rem"}}><i className="fas fa-user"></i></span>&nbsp;&nbsp;
          <span style={{padding: "1rem .5rem", fontSize: "1.2rem"}}>
            <Link href="/profile">
              <a>
                Profile
              </a>
            </Link>
          </span>
        </li>
        <li style={{marginTop: "20px", marginBottom: "20px"}} onClick={() => logout(() => {Router.push('/')})}>
          <span className="" style={{fontSize: "1.2rem"}}><i className="fas fa-sign-out-alt"></i></span>&nbsp;&nbsp;
          <span style={{padding: "1rem .5rem", fontSize: "1.2rem"}}>
            <Link href="">
              <a>
                Logout
              </a>
            </Link>
          </span>
        </li>
      </ul>
    </div>    
    </>
  );
};

 
export default withRouter(Sidenav);