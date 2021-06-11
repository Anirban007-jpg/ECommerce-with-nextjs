import Layout  from "../components/Layout"
import React from "react"
import Head from 'next/head';
import { API_NAME, DOMAIN } from "../config";

const HomePage = () => {

    const head = () => (
        <Head>
            <title>Home Page | {API_NAME}</title>
            <meta name="description"/>
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`Home Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the landing Page" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )

    return (
        <React.Fragment>
            {head()}
              <Layout>
                <div className="canvas">
                    <h1><strong>AMAZONIA - Amazon Clone</strong></h1>
                    <p className="lead text-bold">This is a amazone clone made by Anirban and Bishal</p>
                </div>
                <div>
                    <p>This Page will be designed Later</p>
                </div>
              </Layout> 
         <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "350px"}}>
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
  
export default HomePage