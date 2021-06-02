import React,{useState} from 'react'
import {EditOutlined} from '@ant-design/icons';
import Link from 'next/link';
import {toast} from 'react-toastify';
import {register} from '../../actions/auth';

const RegisterComponent = () => {
    // initialize the state
    const [values,setValues] = useState({
        name: '',
        email:'',
        address: '',
        mobile_no:'',
        about:'',
        password:'',
        role:'',
        confirmed_password:'',
        error:'',
        success:'',
        showForm: true,
        length: 400,
        loading:false
    });

    // destructure values from state
    const {name,
    email,
    address,
    mobile_no,
    about,
    password,
    confirmed_password,
    role,
    error,
    success,
    showForm,
    loading,
    length} = values;

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
            name,
            email,
            address,
            mobile_no,
            about,
            password,
            confirmed_password,
            role
        };
            
        register(user).then(data => {
            if(data.error){
                setValues({...values, error: data.error,loading: false});
            }
            else {
                setValues({
                    ...values, 
                    success: data.message,
                    name: '',
                    email:'',
                    address: '',
                    mobile_no:'',
                    about:'',
                    password:'',
                    role:'',
                    confirmed_password:'',
                    showForm:false,
                    loading:false
                })
            }
        })
      
    
    }
    
    // Form
    const RegistrationForm = (name,email,address,mobile_no,about,password,confirmed_password,role,loading) => (
            <form noValidate onSubmit={handleSubmit}  className="row pb-4 ml-3 mr-4" style={{border: '3px solid black'}}>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><strong>Name:</strong></label><br/>
                    <input className="form-control" type="text" value={name} onChange={handleChange('name')} placeholder="Enter your name...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fa fa-envelope"></i>{" "}<strong>Email:</strong></label><br/>
                    <input className="form-control" type="email" value={email} onChange={handleChange('email')} placeholder="Enter your email...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-home"></i>{" "}<strong>Address:</strong></label><br/><br/>
                    <textarea rows="2" className="form-control" type="text" value={address} onChange={handleChange('address')} placeholder="Enter your address...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-phone-alt"></i>{" "}<strong>Mobile Number:</strong></label><br/>
                    <input className="form-control" type="text" value={mobile_no} onChange={handleChange('mobile_no')} placeholder="Enter your mobile number to be registered...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-portrait"></i>{" "}<strong>Bio:</strong> {((length-about.length) <= 0) ? (<><p style={{color: 'red'}}>[Word Limit reached!!!]</p></>) : (<><p>[{length-about.length} words left]</p></>)}</label><br/>
                    <textarea rows="4" style={{height: '200px'}} className="form-control" disabled={(length-about.length) <= 0} value={about} onChange={handleChange('about')} type="text" placeholder="Enter something about yourself...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-user-tag"></i>{" "}<strong>Role:</strong></label><br/>
                    <select type="text" className="form-control" value={role} onChange={handleChange('role')}>
                        <option value=''>Select Role</option>
                        <option value='Dealer'>Dealer</option>
                        <option value='Customer'>User</option>
                        <option value='Shopper'>Shopper</option>
                    </select>
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-lock"></i>{" "}<strong>Password:</strong></label><br/>
                    <input className="form-control" type="password" value={password} onChange={handleChange('password')} placeholder="Enter your Password...." />
                    <br/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fas fa-lock"></i>{" "}<strong>Confirm Password:</strong></label><br/>
                    <input className="form-control" type="password" value={confirmed_password} onChange={handleChange('confirmed_password')} placeholder="Re-Enter your given Password...." />
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
                            <strong><h6 style={{color: "red"}}>Already have an Account?<Link href="/login"> Log In Here</Link></h6></strong>
                            <strong><p style={{fontSize: "15px"}}><Link href="/">Go Back --&gt;</Link></p></strong>
                        </div>
                        </>
                    )}
            </form>
        
    )

    return (
            <React.Fragment>
                {error ? toast.error(error) : ''}
                {success ? <div className="alert alert-success">{success}<Link href="/login">Sign in</Link></div>:''}
                {showForm && RegistrationForm(name,email,address,mobile_no,about,password,confirmed_password,role,loading)}
            </React.Fragment>
    )
}

export default RegisterComponent
