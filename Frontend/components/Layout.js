import Navbar from './Navbar';
import React from 'react';



const Layout = ({children}) => {
 return (
    
    <React.Fragment>
        <Navbar />
        {children}
    </React.Fragment>   
 );   
}

export default Layout;