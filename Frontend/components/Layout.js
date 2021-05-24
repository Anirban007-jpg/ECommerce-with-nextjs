import React, {Fragment} from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
 return (
    <Fragment>
        <Navbar />
        {children}
        <p>Footer</p>
    </Fragment>   
 );   
}

export default Layout;