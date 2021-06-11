import React,{useState} from 'react'
import Sidenav from './Sidenav';



const Dashboard = ({children}) => {
    
   

    return (
        <>
          <Sidenav/>
            {children}

        </>
    )
}

export default Dashboard