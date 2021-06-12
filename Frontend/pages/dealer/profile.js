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
            <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "750px"}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text"></h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text"></h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright" style={{backgroundColor: '#212121'}}>
            <div className="container">
            © 2021 Copyright Amazonia
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </React.Fragment>
    )
}

export default profile
