import Layout  from "../components/Layout"
import React from "react"
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const contact = () => {

    const head = () => (
        <Head>
            <title>Contact Us Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}/contact`} />
            <meta property="og:title" content={`Conatct Us Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Contact Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/contact`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    return (
        <React.Fragment>
            {head()}
                <div className="canvas">
                    <h1><strong>AMAZONIA - Amazon Clone</strong></h1>
                    <p className="lead text-bold">This is the contact page so that you can contact with the website</p>
                </div>
                <div>
                    <p>This Page will be designed Later</p>
                </div>
            <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "250px"}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text"></h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text"></h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright" style={{backgroundColor: '#212121'}}>
            <div className="container">
            © 2021 Copyright Amazonia
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </React.Fragment>
    )
}
  
export default contact