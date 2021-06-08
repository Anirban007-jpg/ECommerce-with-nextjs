import React,{useEffect} from 'react'
import {isAuth} from "../../actions/auth";
import Router from 'next/router'


const index = () => {

    // page protection
    useEffect(() => {
        if (!isAuth()){
            Router.push('/');
        }
     }, [])


    // page protection 2nd phase
    if (isAuth() && isAuth().role === 'Customer'){
        Router.push('/customer');
    }
    else  if (isAuth() && isAuth().role === 'Shopper'){
        Router.push('/shopper');
    }
    else  if (isAuth() && isAuth().role === 'Admin'){
        Router.push('/admin');
    }

    

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default index
