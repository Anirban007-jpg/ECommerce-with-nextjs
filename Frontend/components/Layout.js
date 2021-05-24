import React, {Fragment} from 'react'

const Layout = ({children}) => {
 return (
    <Fragment>
        <p>Header</p>
        {children}
        <p>Footer</p>
    </Fragment>   
 );   
}

export default Layout;