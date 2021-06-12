import React,{useState} from 'react'
import {useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link';
import {toast} from 'react-toastify';
import {isAuth} from "../../actions/auth";
import {authenticate, login} from '../../actions/auth';
import LoginGoogle from './LoginGoogle';

const RegisterComponent = () => {
    // initialize the state
    const [values,setValues] = useState({
   
        email:'',
        password:'',
        error:'',
        success:'',
        loading:false
    });

    // page protection
    useEffect(() => {
        if (isAuth() && isAuth().role === "Dealer"){
            Router.push('/dealer')
        }        
        else if (isAuth() && isAuth().role === "Shopper"){
            Router.push('/shopper')
        }
        else if (isAuth() && isAuth().role === "Customer"){
            Router.push('/customer')
        }
        else if (isAuth() && isAuth().role === "Admin"){
            Router.push('/admin')
        }
    }, [])

    // destructure values from state
    const {
    email,
    password,
    error,
    success,
    loading,
    } = values;

    // Onchange Function
    const handleChange = name => e => {
        const value = e.target.value;
        setValues({...values,[name]: value,error:''});
    }


    // Onsubmit Functions
    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values,loading:true});
        const user = {
            email,
            password,
        };
            
        login(user).then(data => {
            if(data.error){
                setValues({...values, error: data.error,loading: false});
            }
            else {
                setValues({...values, success: data.message,loading:false});
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 'Customer'){
                        Router.push('/customer');
                    }
                    else if (isAuth() && isAuth().role === 'Dealer'){
                        Router.push('/dealer');
                    }
                    else if (isAuth() && isAuth().role === 'Shopper'){
                        Router.push('/shopper');
                    }
                    else if (isAuth() && isAuth().role === "Admin"){
                        Router.push('/admin')
                    }
                })
            }
        })
      
    
    }
    
    // Form
    const LoginForm = (email,password,loading) => (
            <form noValidate onSubmit={handleSubmit}  className="row pb-4 ml-3 mr-4">
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fa fa-envelope"></i>{" "}<strong>Email:</strong></label><br/>
                    <input className="form-control" type="email" value={email} onChange={handleChange('email')} placeholder="Enter your email...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-lock"></i>{" "}<strong>Password:</strong></label><br/>
                    <input className="form-control" type="password" value={password} onChange={handleChange('password')} placeholder="Enter your Password...." />
                    <br/>
                </div>
               
                    {loading ? (
                        <div className="form-group"><br/>
                            <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                    )
                    
                    : (
                        <>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit"><i className="fas fa-user-plus"></i>{" "}Submit</button><br/><hr/>
                            <strong><h6 style={{color: "red"}}>Don't have an Account?<Link href="/register"> Register Here</Link></h6></strong>
                            <strong><p style={{fontSize: "15px"}}><Link href="/">Go Back --&gt;</Link></p></strong>
                            <strong><p style={{fontSize: "15px"}}><Link href="/password/forgot">Forgot Password --&gt;</Link></p></strong>
                        </div>
                        </>
                    )}
            </form>
        
    )

    return (
            <React.Fragment>
                <div className="container-fluid">
                    <LoginGoogle />
                </div><br/>
                {error ? toast.error(error) : ''}
                {LoginForm(email,password,loading)}
            </React.Fragment>
    )
}

export default RegisterComponent
