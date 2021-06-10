import React,{useEffect} from 'react'
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/profile/Profile';

const adminprofile = () => {

   
    return (
        <React.Fragment>
            <Dashboard>
            <div className="canvas">
                    <h1 style={{fontSize: "60px"}}>User Profile</h1>
            </div><br/>
     
              <Profile />
               
   
            
            </Dashboard>
        </React.Fragment>
    )
}

export default adminprofile
