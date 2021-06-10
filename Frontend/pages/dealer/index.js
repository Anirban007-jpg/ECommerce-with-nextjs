import React,{useEffect} from 'react'
import {isAuth} from "../../actions/auth";
import Router from 'next/router'
import Dashboard from '../../components/dealer/Dashboard';


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
            <Dashboard>
                <div className="canvas">
                    <h1 className="heading1">Dealer Dashboard</h1>
                </div>
            </Dashboard>
        </React.Fragment>
    )
}

export default index
