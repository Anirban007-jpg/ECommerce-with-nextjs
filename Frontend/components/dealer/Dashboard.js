import React,{useState} from 'react'
import "semantic-ui-css/semantic.min.css";
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