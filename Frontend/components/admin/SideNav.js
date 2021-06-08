import React from 'react'
import {isAuth, logout} from "../../actions/auth";
import {API_NAME} from "../../config";
import Router from 'next/router';
import Link from 'next/link';

const SideNav = () => {
    return (
        <>
        <div className="sidebar">
        <div className="sidebar-brand">
            <div className="brand-flex">
                <img src="" width="40px" alt="" />

                <div>
                     <div className="brand-icons">
                         <span className="las la-bell"></span>
                         <span className="las la-user-circle"></span>
                     </div>
                </div>
            </div>
        </div>

        <div class="sidebar-main">
            <div className="sidebar-user">
                <img src="" alt="" />
                <br/><br/>
                <div>
                    <h6>{isAuth() && isAuth().name}</h6>
                    <span>{isAuth() && isAuth().email}</span>
                </div> 
            </div><hr/>

            <div className="sidebar-menu">
                    <div className="menu-head">
                        <span>Dashboard</span> 
                    </div>
                    <div>
                        <span>
                            <Link href="/dealer">
                                <a className="DLink">
                                    {API_NAME}
                                </a>
                            </Link>
                        </span>
                    </div><hr/>
                    <div className="menu-head">
                        <span>Other Options</span> 
                    </div>
                    <ul>
                        <li onClick={() => logout(() => {Router.push('/')})} style={{cursor: "pointer"}}>
                            <span className="las la-balance-scale"></span>{' '}
                                <a>Logout</a>
                        </li>
                    </ul><hr/>
                    <div className="menu-head">
                        <span>Profile Management</span> 
                        
                    </div>
                    <li>
                        <span className="las la-balance-scale"></span>{' '}
                        <Link href="">
                            <a>{isAuth() ? ( <>{isAuth().name}'s Profile</> ): ''}</a>
                        </Link>
                    </li>
            </div>
        </div>
        </div>
           <div className="main-content">
           <header>
               <div className="menu-toggle">
                   <label for="">
                       <span className="las la-bars"></span>
                   </label>
               </div>
   
               <div className="header-icons">
                   <span className="las la-search"></span>
                   <span className="las la-bookmark"></span>
                   <span className="las la-sms"></span>
               </div>
           </header>
           </div>
           </>
    )
}

export default SideNav
