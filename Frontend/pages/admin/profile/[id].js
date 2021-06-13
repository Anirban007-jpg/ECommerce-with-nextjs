import React from 'react'
import {withRouter} from 'next/router'
import Dashboard from '../../../components/admin/Dashboard';

const update = ({router}) => {
    return (
        <>
            <Dashboard>
                <div className="canvas">
                    <h1 className="heading1">Update User Profile</h1>
                </div>
                Update Profile component<br/>
                {JSON.stringify(router)}
            </Dashboard>
        </>
    )
}

export default withRouter(update)
