import React from 'react'
import { isAuth } from '../actions/auth';
import Dashboard from '../components/dealer/Dashboard';

const profile = () => {
    return (
        <React.Fragment>
            <Dashboard>
            <div className="canvas" style={{height: "200px"}}>
                    <h1 style={{fontSize: "60px"}}>User Profile</h1>
            </div><br/>
            <p>profile Component</p>
            </Dashboard>
        </React.Fragment>
    )
}

export default profile
