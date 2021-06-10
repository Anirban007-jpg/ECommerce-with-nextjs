import React,{useEffect} from 'react'
import { isAuth } from '../actions/auth';
import Dashboard from '../components/dealer/Dashboard';
import {getCookie,logout} from '../actions/auth';
import Router from 'next/router';

const profile = () => {

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
   
    return (
        <React.Fragment>
            <Dashboard>
            <div className="canvas" style={{height: "200px"}}>
                    <h1 style={{fontSize: "60px"}}>User Profile</h1>
            </div><br/>
            <p>profile Component</p>
            </Dashboard>
        </React.Fragment>
    )
}

export default profile
