import React,{useEffect} from 'react'
import {isAuth, logout, getCookie} from "../../actions/auth";
import {API_NAME} from "../../config";
import Router from 'next/router';
import Link from 'next/link';


const SideNav = () => {

    const token = getCookie('token');

    // page protection
    useEffect(() => {
        if (isAuth() === false){
            logout(() => {
                Router.push({
                    pathname: '/login',
                    query : {
                        message : 'Your session has expired. Please Log in again'
                    }
                })
            })
        }
        else if (!token){
            logout(() => {
                Router.push({
                    pathname: '/login',
                    query : {
                        message : 'Your session has expired. Please Log in again'
                    }
                })
            })
        }
        
    },[])

    useEffect(() => {require('../../static/js/myscript.js')},[])

    return (
        <>
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <div className="logo_name">
                            {API_NAME}
                        </div>
                    </div>
                    <i className="bx bx-menu" id="btn"></i>
                </div>
                    <ul className="nav_list">
                        <li>
                            <i className="bx bx-search"></i><br/>
                      
                            <span className="tooltip">Search</span>                           
                        </li>
                        <li>
                            <a href="/admin">
                                <i className="bx bx-home"></i>&nbsp;&nbsp;
                                    <span className="links_name">
                                        <Link href="/admin">
                                            Dashboard
                                        </Link>
                                </span>
                                <span className="tooltip">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/adminprofile">
                                <i className="bx bx-user"></i>&nbsp;&nbsp;
                                    <span className="links_name">
                                        <Link href="/adminprofile">
                                            Profile
                                        </Link>
                                </span>
                                <span className="tooltip">Profile</span>
                            </a>
                        </li>
                        <li onClick={() => logout(() => {Router.replace('/')})}>
                            <a>
                                <i className="bx bx-log-out"></i>&nbsp;&nbsp;
                                    <span className="links_name">
                                        <Link href="">
                                            Logout
                                        </Link>
                                     </span>
                                <span className="tooltip">Logout</span>
                            </a>
                        </li>
                    </ul>

                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src="" alt="" />
                            <div className="name_job">
                                <div className="name">{isAuth() && isAuth().name}</div>
                                <div className="email">{isAuth() && isAuth().email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav
