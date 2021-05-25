import React from 'react';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Link from 'next/link';
import {API_NAME} from '../config.js';

const { Item } = Menu;

const Navbar = () => {

    return (
         
       <Menu mode="horizontal" style={{backgroundColor: '#42a5f5'}}>
         <Item style={{fontSize: '20px', fontWeight: 'bold'}}>
            <Link href="/">
              <a>{API_NAME}</a>
            </Link>
         </Item>
         <Item>
            <Link href="/login">
              <a>Login</a>
            </Link>
         </Item>
         <Item>
            <Link href="/register">
              <a>Register</a>
            </Link>
         </Item>

       </Menu>

            
    )
}

export default Navbar
