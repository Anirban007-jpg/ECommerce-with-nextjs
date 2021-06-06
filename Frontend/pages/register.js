import React from 'react'
import RegisterComponent from '../components/auth/RegisterComponent';
import Layout from '../components/Layout';

const register = () => {
    return (
        <Layout>
            <React.Fragment>
                <br />
                <h2 className="text-center">Registration Form</h2><br/>
                <div className="mr-3 ml-3 pr-3 pl-3">
                    <RegisterComponent />
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default register;
