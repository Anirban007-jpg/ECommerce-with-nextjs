import {useState, useEffect} from 'react';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import '../node_modules/antd/dist/antd.css';
import {withRouter} from "next/router";
import Router from 'next/router';
import Link from 'next/link';
import {API_NAME} from '../config.js';
import nProgress from 'nprogress';
import "../node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = url => nProgress.start();
Router.onRouteChangeComplete = url => nProgress.done();
Router.onRouteChangeError = url => nProgress.done();

const { Item } = Menu;

const styleChange = (router,key) => {
    if (router.pathname === key){
      return {color:"grey" , fontWeight: "bolder"}
    }else{
      return;
    }
}

const Navbar = ({router}) => {

  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])


    return (
         
       <Menu mode="horizontal" selectedKeys={[current]}>
         <Item style={{fontSize: '20px', fontWeight: 'bold'}}>
            <Link href="/">
              <a>{API_NAME}</a>
            </Link>
         </Item>
         <Item key="/login" onClick={(e) => setCurrent(e.key)}>
            <Link href="/login">
              <a style={styleChange(router, "/login")}>Login</a>
            </Link>
         </Item>
         <Item key="/register" onClick={(e) => setCurrent(e.key)}>
            <Link href="/register">
              <a style={styleChange(router, "/register")}>Register</a>
            </Link>
         </Item>

       </Menu>

            
    )
}

export default withRouter(Navbar);
