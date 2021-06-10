import React,{useState} from 'react'
import Sidenav from './Sidenav';



const Dashboard = ({children}) => {
    
   

    return (
        <>
          <Sidenav/>
          <div>
            {children}
          </div>
        </>
    )
}

export default Dashboard