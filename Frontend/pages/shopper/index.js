import React, { useEffect } from 'react'
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
    if (isAuth() && isAuth().role === 'Customer'){
        Router.push('/customer');
    }
    else  if (isAuth() && isAuth().role === 'Dealer'){
        Router.push('/dealer');
    }
    

    return (
            <Layout>
                <h1>Shopper Dashboard</h1>
            </Layout>
    )
}

export default index
