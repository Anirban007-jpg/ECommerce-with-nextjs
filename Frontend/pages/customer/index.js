import React,{useEffect} from 'react'
import Layout from '../../components/Layout'
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
    if (isAuth() && isAuth().role === 'Dealer'){
        Router.push('/dealer');
    }
    else  if (isAuth() && isAuth().role === 'Shopper'){
        Router.push('/shopper');
    }

    return (
            <Layout>
                <h1>Customer Dashboard</h1>
            </Layout>
    )
}

export default index
