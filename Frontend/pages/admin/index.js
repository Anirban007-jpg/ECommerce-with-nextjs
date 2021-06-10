import Dashboard from '../../components/admin/Dashboard'
import React,{useEffect} from 'react'
import {isAuth} from "../../actions/auth";
import Router from 'next/router'
import Head from 'next/head';

const index = () => {



    const head = () => (
        <Head>
            <title>Admin Dashboard Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/admin`} />
            <meta property="og:title" content={`Admin Dashboard Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Registration Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/admin`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )


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
    else  if (isAuth() && isAuth().role === 'Dealer'){
        Router.push('/dealer');
    }

    return (
        <React.Fragment>
            <Dashboard />
            <div className="canvas">
                <h1>Admin Dashboard</h1>
            </div>
            <p style={{marginLeft: '100px'}}>This content will be designed later</p>
        </React.Fragment>
    )
}

export default index
