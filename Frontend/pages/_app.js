import App from 'next/app';


import "../static/css/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from '../components/Navbar';
// import '../static/css/Sidenav1.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ToastContainer position="top-center" />
            <Navbar />
            <Component {...pageProps} />
        </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp;