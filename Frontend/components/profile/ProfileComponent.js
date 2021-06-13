import React,{useEffect} from 'react'
import {getCookie,logout} from '../../actions/auth';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';
import moment from 'moment';
import Link from 'next/link';

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

    let id = isAuth()._id; 
   
    return (
        <>
        <div className="row">
            <div className="col-md-4 text-center pt-4">
                    <div>
                        <img src="https://www.dropbox.com/s/dnai9lwy7yaghvf/20210420_013825.png?dl=0&raw=1" style={{height: "18rem", width: "18rem", border: "2px solid black"}} className="rounded-circle" />
                    </div>
                </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4 className="heading3">Profile</h4>    
                    </div>
                    <div className="card-body">
                        <h6 className="details">{isAuth().name}</h6>
                        <h6 className="details">{isAuth().email}</h6>
                        <h6 className="details">Address : {isAuth().address}</h6>
                        <h6 className="details">Mobile No: {isAuth().mobile_no}</h6>
                        <h6 className="details">Username: {isAuth().username}</h6>
                        <h6 className="details">User Registerd On : {moment(isAuth().registered_on).fromNow()}</h6>
                    </div>
                    <div className="card-footer">
                        <span className="btn btn-primary">
                            {isAuth().role === "Dealer" && (
                                <Link href={`/dealer/profile/${id}`}>
                                    <a style={{color: '#fff'}}>
                                        Edit
                                    </a>
                                </Link>
                            )}
                            {isAuth().role === "Admin" && (
                                <Link href={`/admin/profile/${id}`}>
                                    <a style={{color: '#fff'}}>
                                        Edit
                                    </a>
                                </Link>
                            )}
                            {isAuth().role === "Shopper" && (
                                <Link href={`/shopper/${isAuth().id}`}>
                                    <a style={{color: '#fff'}}>
                                        Edit
                                    </a>
                                </Link>
                            )}
                            {isAuth().role === "Customer" && (
                                <Link href={`/customer/${isAuth().id}`}>
                                    <a style={{color: '#fff'}}>
                                        Edit
                                    </a>
                                </Link>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div><br/>
        <div className="conatiner">
            <div className="row">
              <div className="col-md-12 col-12">
                <h4 className="detail center">About Yourself</h4><br/>
                        <p className="pdetail">{isAuth().about}</p>
              </div>
            </div>
        </div><br/>
        <div className="conatiner">
            <div className="row">
              <div className="col-md-12 col-12">
                <h4 className="detail center">Authorised Permissions</h4><br/>
                       {isAuth().role === 'Dealer' && (
                           <ol style={{marginLeft: "150px"}}>
                               <li>Create/Update/Read Product</li>
                               <li>Create/Update/Read Category</li>
                               <li>Create/Update/Read Brand</li>
                               <li>Create/Update/Read Brand Color & Size</li>
                               <p><strong>Contact Database Administrator for more authorization permissions</strong></p>
                           </ol>
                           
                       )}
                        {isAuth().role === 'Admin' && (
                           <ol style={{marginLeft: "50px"}}>
                               <li>Delete User</li>
                               <li>Update User</li>
                               <li>Delete Product</li>
                               <li>Delete Category</li>
                               <li>Delete Brand</li>
                               <li>Delete Brand Color & Size</li>
                           </ol>
                       )}
                        {isAuth().role === 'Customer' && (
                           <p></p>
                       )}
                        {isAuth().role === 'Shopper' && (
                           <ol>
                               <li>Manage Pricing</li>
                           </ol>
                       )}
              </div>
            </div>
        </div><br/>
        <div className="conatiner">
            <div className="row">
              <div className="col-md-12 col-12">
                <h4 className="detail center">Social Links</h4><br/>
                {isAuth().role === 'Admin' && (
                    <>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().facebook}>
                                Facebook 
                            </a>
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            {isAuth().twitter && (
                                <a href={isAuth().twitter}>
                                    Twitter
                                </a>
                            )}  
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().youtube}>
                                Youtube
                            </a>
                        </span>    
                        </p>
                    </>
                )}
                 {isAuth().role === 'Dealer' && (
                    <>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().facebook}>
                                Facebook 
                            </a>
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            {isAuth().twitter && (
                                <a href={isAuth().twitter}>
                                    Twitter
                                </a>
                            )}  
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().youtube}>
                                Youtube
                            </a>
                        </span>    
                        </p>
                    </>
                )}
                 {isAuth().role === 'Shopper' && (
                    <>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().facebook}>
                                Facebook 
                            </a>
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            {isAuth().twitter && (
                                <a href={isAuth().twitter}>
                                    Twitter
                                </a>
                            )}  
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().youtube}>
                                Youtube
                            </a>
                        </span>    
                        </p>
                    </>
                )}
                 {isAuth().role === 'Customer' && (
                    <>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().facebook}>
                                Facebook 
                            </a>
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            {isAuth().twitter && (
                                <a href={isAuth().twitter}>
                                    Twitter
                                </a>
                            )}  
                        </span>    
                        </p>
                        <p className="pdetail">
                        <span>
                            <a href={isAuth().youtube}>
                                Youtube
                            </a>
                        </span>    
                        </p>
                    </>
                )}
                      
              </div>
            </div>
        </div>
        </>
    )
}

export default Profile
