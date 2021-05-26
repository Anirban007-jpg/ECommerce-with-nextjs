import React from 'react'
import {EditOutlined} from '@ant-design/icons';
import Link from 'next/link';

const RegisterComponent = () => {
    // initialize the state

    // Onchange Function

    // Onsubmit Functions
    const RegistrationForm = () => (
        <div className="row pt-3 pb-4 ml-3 mr-4" style={{border: '3px solid black'}}>
            <form noValidate>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><EditOutlined style={{fontSize: "20px"}}/>{" "}<strong>Name:</strong></label><br/>
                    <input className="form-control" type="text" placeholder="Enter your name...." />
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i className="fa fa-envelope"></i>{" "}<strong>Email:</strong></label><br/>
                    <input className="form-control" type="email" placeholder="Enter your email...." />
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i class="fas fa-home"></i>{" "}<strong>Address:</strong></label><br/><br/>
                    <textarea rows="2" className="form-control" type="text" placeholder="Enter your address...." />
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i class="fas fa-phone-alt"></i>{" "}<strong>Mobile Number:</strong></label><br/>
                    <input className="form-control" type="text" placeholder="Enter your mobile number to be registered...." />
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i class="fas fa-portrait"></i>{" "}<strong>Bio:</strong></label><br/>
                    <textarea rows="4" className="form-control" type="text" placeholder="Enter your mobile number to be registered...." />
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i class="fas fa-user-tag"></i>{" "}<strong>Role:</strong></label><br/>
                    <select type="text" className="form-control" placeholder="Enter your role...">
                        <option value=''>Select Role</option>
                        <option value='Dealer'>Dealer</option>
                        <option value='Customer'>User</option>
                        <option value='Shopper'>Shopper</option>
                    </select>
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i class="fas fa-lock"></i>{" "}<strong>Password:</strong></label><br/>
                    <input className="form-control" type="password" placeholder="Enter your Password...." />
                </div><br/>
                <div className="form-group">
                    <label style={{fontSize: "20px"}}><i class="fas fa-lock"></i>{" "}<strong>Confirm Password:</strong></label><br/>
                    <input className="form-control" type="password" placeholder="Re-Enter your given Password...." />
                </div><br/>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit"><i class="fas fa-user-plus"></i>{" "}Submit</button><br/><hr/>
                    <strong><p style={{fontSize: "15px"}}><Link href="/">Go Back --&gt;</Link></p></strong>
                </div>
            </form>
        </div>
    )

    return (
            <React.Fragment>
                {RegistrationForm()}
            </React.Fragment>
    )
}

export default RegisterComponent
