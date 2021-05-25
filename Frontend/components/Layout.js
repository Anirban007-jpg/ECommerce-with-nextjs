import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';

const Layout = ({children}) => {
 return (
    <React.Fragment>
        <Navbar />
        {children}
        <Footer />
    </React.Fragment>   
 );   
}

export default Layout;