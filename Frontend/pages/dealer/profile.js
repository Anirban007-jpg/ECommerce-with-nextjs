import React,{useEffect} from 'react'
import { isAuth } from '../../actions/auth';
import Dashboard from '../../components/dealer/Dashboard';
import {getCookie,logout} from '../../actions/auth';
import Router from 'next/router';

const profile = () => {

    const token = getCookie('token');

    // token expiry protection and user protection
    useEffect(() => {
        if (isAuth() === false){
            logout(() => {
                Router.push({
                    pathname: '/login',
                    query : {
                        message : 'Something went wrong! Please Login again'
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
                        <h1 className="heading1">User Profile</h1>
                </div><br/>
                <p style={{marginLeft: "300px"}}>profile Component</p>
            </Dashboard> 
        </React.Fragment>
    )
}

export default profile
