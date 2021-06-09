import React,{useState} from 'react'
import Sidenav from './Sidenav';
import Header from './Header';
import "semantic-ui-css/semantic.min.css";
import cx from 'classnames';


const Dashboard = (props) => {
    
    const [toggle, setToggle] = useState(false);

    const classes = cx(
      'pusher',
      'side'
    );

    const toggleMenu = () => {
      setToggle(!toggle);
    }

    return (
        <>
        <div>
            <Header onToggleMenu={toggleMenu} />
                <div className="ui attached pushable" style={{height: '100vh'}}>
                    <Sidenav toggleMenu={toggle}/>
                    {props.children}
                </div>
        </div>
          
        </>
    )
}

export default Dashboard