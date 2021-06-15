import { useState } from "react";
import { forgotPassword } from "../../actions/auth";
import Layout from "../../components/Layout";
import {toast} from 'react-toastify';
import Head from 'next/head';
import Link from 'next/link';
import {API_NAME,DOMAIN} from "../../config";

const ForgotPassword = () => {
    
    const head = () => (
        <Head>
            <title>Password Forgot Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/password/forgot`} />
            <meta property="og:title" content={`Password Forgot Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Password Reset Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )


    const [values,setValues] = useState({
        email: "",
        message: "",
        error: "",
        showForm: true,
        success: false
    })

    const {email, message,error, showForm, success} = values;

    const handleChange = name => e => {
        setValues({...values, message:'',error:'', [name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, message:'',error:''});
        forgotPassword({email}).then(data => {
            if (data.error){
                setValues({...values, error: data.error});
            }else{
                setValues({...values,email: '', showForm: false, success: data.success});
            }
        })
    }

    const showError = () => (error ? <div className="alert alert-danger">{error}</div>: '');
    
    const passwordForgotForm = () => (
        <div className="container-fluid">
        <form onSubmit={handleSubmit}>
            <div className="form-group pt-5 mr-10 ml-10">
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} placeholder="Enter your registered email" required />
            </div>
            <div>
                <button className="btn btn-primary">Send Password Reset link</button><br/><br/>
                <strong><p style={{fontSize: "15px"}}><Link href="/">Go Back --&gt;</Link></p></strong>
            </div>
        </form>
        </div>
    )



    return (
        <>
         {head()}
         <Layout>         
            {showError()}
            {success ? toast.success('Your mail is sent successfully') : ''}
            <div className="canvas">
                 <h1>Forgot Password</h1>   
            </div><br/>
            
            {showForm && passwordForgotForm()}  
         </Layout>   
        </>
    )
}

export default ForgotPassword
