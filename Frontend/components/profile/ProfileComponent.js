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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 text-center pt-4">
                    <img src="https://www.dropbox.com/s/dnai9lwy7yaghvf/20210420_013825.png?dl=0&raw=1" style={{height: "18rem", width: "18rem", borderColor: 'black', borderWidth: '0', borderStyle: 'solid', borderRadius: "150px", objectFit: 'cover'}} className="img-thumbnail" />
                </div>
                <div className="col-md-8 mr-6">
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
                    <h4 className="detail center">User Bio</h4><br/>
                        
                </div>

                <p className="pdetail">
                    <div className="text">
                        {isAuth().about}
                    </div>
                    {/* <div>
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
                                <p className="pdetails">
                                <span>
                                    <a href={isAuth().facebook}>
                                        Facebook 
                                    </a>
                                </span>    
                                </p>
                                <p className="pdetails">
                                <span>
                                    {isAuth().twitter && (
                                        <a href={isAuth().twitter}>
                                            Twitter
                                        </a>
                                    )}  
                                </span>    
                                </p>
                                <p className="pdetails">
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
                                <p className="pdetails">
                                <span>
                                    <a href={isAuth().facebook}>
                                        Facebook 
                                    </a>
                                </span>    
                                </p>
                                <p className="pdetails">
                                <span>
                                    {isAuth().twitter && (
                                        <a href={isAuth().twitter}>
                                            Twitter
                                        </a>
                                    )}  
                                </span>    
                                </p>
                                <p className="pdetails">
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
                                <p className="pdetails">
                                <span>
                                    <a href={isAuth().facebook}>
                                        Facebook 
                                    </a>
                                </span>    
                                </p>
                                <p className="pdetails">
                                <span>
                                    {isAuth().twitter && (
                                        <a href={isAuth().twitter}>
                                            Twitter
                                        </a>
                                    )}  
                                </span>    
                                </p>
                                <p className="pdetails">
                                <span>
                                    <a href={isAuth().youtube}>
                                        Youtube
                                    </a>
                                </span>    
                                </p>
                            </>
                        )}
                        </div> */}
                </p>
                </div>
            </div><br/>
            <div className="conatiner">
                <div className="row">
                <div className="col-md-12 col-12">
                    <h4 className="detail center">Authorised Permissions</h4><br/>
                        {isAuth().role === 'Dealer' && (
                            <ol className="order">
                                <li className="ordertext">Create/Update/Read Product</li>
                                <li className="ordertext">Create/Update/Read Category</li>
                                <li className="ordertext">Create/Update/Read Brand</li>
                                <li className="ordertext">Create/Update/Read Brand Color & Size</li><hr/>
                                <p>Contact Database Administrator for more authorization permissions</p>
                            </ol>
                            
                        )}
                            {isAuth().role === 'Admin' && (
                            <ol className="order">
                                <li className="ordertext">Delete User</li>
                                <li className="ordertext">Update User</li>
                                <li className="ordertext">Delete Product</li>
                                <li className="ordertext">Delete Category</li>
                                <li className="ordertext">Delete Brand</li>
                                <li className="ordertext">Delete Brand Color & Size</li><hr/>
                                <p>Contact Database Administrator for more authorization permissions</p>
                            </ol>
                        )}
                            {isAuth().role === 'Customer' && (
                            <p>Contact Database Administrator for more authorization permissions</p>
                        )}
                            {isAuth().role === 'Shopper' && (
                            <ol>
                                <li className="ordertext">Manage Pricing</li>
                                <p>Contact Database Administrator for more authorization permissions</p>
                            </ol>
                        )}
                </div>
                </div>
            </div><br/>
        </div>
        </>
    )
}

export default Profile
