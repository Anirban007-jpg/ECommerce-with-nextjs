import React,{useEffect} from 'react'
import Dashboard from '../../components/admin/Dashboard';
import Profile from '../../components/admin/profile/Profile';

const adminprofile = () => {

   
    return (
        <React.Fragment>
            <Dashboard>
            <div className="canvas">
                    <h1 style={{fontSize: "60px"}}>User Profile</h1>
            </div><br/>
     
              <Profile />
               
              <footer className="page-footer" style={{backgroundColor: '#757575', marginTop : "750px"}}>
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
            
            </Dashboard>
        </React.Fragment>
    )
}

export default adminprofile
