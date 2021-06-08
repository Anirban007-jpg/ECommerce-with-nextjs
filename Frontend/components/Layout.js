import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Layout = ({children}) => {
 return (
    <React.Fragment>
        <ToastContainer position="top-center" />
        <Navbar />
            {children}
        <Footer />
    </React.Fragment>   
 );   
}

export default Layout;