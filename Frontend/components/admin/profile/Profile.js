import React,{useEffect} from 'react'
import {getCookie,logout} from '../../../actions/auth';
import Router from 'next/router';
import { isAuth } from '../../../actions/auth';
const Profile = () => {

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
    
    },[])
   
    return (
        <div className="row" style={{marginLeft: "40px"}}>
            <div className="col-md-6">
                <p>User Image</p>
            </div>
            <div className="col-md-6">
                <p>profile Component</p>
            </div>
        </div>
    )
}

export default Profile
