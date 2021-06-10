import React from 'react'
import SideNav from "./SideNav";


const Dashboard = ({children}) => {
    return (
        <>
            <SideNav />
            <div style={{marginLeft: "70px"}}>
                {children}
            </div>
           
        </>

    )
}

export default Dashboard
