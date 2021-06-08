import React from 'react'
import SideNav from "./SideNav";


const Dashboard = ({children}) => {
    return (
        <>
            <SideNav />
            {children}
            
        </>
    )
}

export default Dashboard
