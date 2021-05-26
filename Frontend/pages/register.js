import React from 'react'
import RegisterComponent from '../components/auth/RegisterComponent';
import Layout from '../components/Layout';

const register = () => {
    return (
        <Layout>
            <React.Fragment>
                <br />
                <h2 className="text-center" style={{textDecoration: 'underline', fontWeight: 'bolder'}}>Registration Form</h2>
                <div className="container mr-3 ml-3 mt-2 mb-2">
                    <RegisterComponent />
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default register;
