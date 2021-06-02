import {useState, useEffect} from 'react';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Link from 'next/link';
import {API_NAME} from '../config.js';

const { Item } = Menu;

const Navbar = () => {

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
              <a>Login</a>
            </Link>
         </Item>
         <Item key="/register" onClick={(e) => setCurrent(e.key)}>
            <Link href="/register">
              <a>Register</a>
            </Link>
         </Item>

       </Menu>

            
    )
}

export default Navbar
