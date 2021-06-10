import { useState } from "react";
import { resetPassword } from "../../../actions/auth";
import Layout from "../../../components/Layout";
import {toast} from 'react-toastify';
import Head from 'next/head';
import {API_NAME,DOMAIN} from "../../../config";
import {withRouter} from 'next/router';

const ResetPassword = ({router}) => {

    const head = () => (
        <Head>
            <title>Password Reset Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/password/reset/${router.query.id}`} />
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
        newPassword: '',
        message: '',
        error: '',
        showForm: true,
    })

    const {newPassword, message,error, showForm} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword({
            newPassword,
            resetPasswordLink: router.query.id
        }).then(data => {
            if (data.error){
                setValues({...values, error: data.error, showForm: false, newPassword: ''})
            }else{
                setValues({...values, message: data.message, showForm: false, newPassword: ''})
            }
        })
       
    }

    const showError = () => (error ? <div className="alert alert-danger">{error}</div>: '');
    
    const ResetPasswordForm = () => (
        <div className="container-fluid">
        <form onSubmit={handleSubmit}>
            <div className="form-group pt-5 mr-10 ml-10">
                <input type="password" onChange={e => setValues({...values, newPassword: e.target.value})} className="form-control" value={newPassword} placeholder="Enter your new Password" required />
            </div>
            <div>
                <button className="btn btn-primary">Reset Password</button>
            </div>
        </form>
        </div>
    )

    return (
        <>
        {head()}
        <Layout>         
           {showError()}
           {message ? toast.success(message) : ''}
           <div className="canvas">
                <h1>Reset Password</h1>   
           </div><br/>
           
           {showForm && ResetPasswordForm()}  
        </Layout>   
       </>
    )
}

export default withRouter(ResetPassword)
