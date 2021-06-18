import React from 'react'
import '../../static/css/form.css';

const UpdateProfile = ({user}) => {

    // building update form
    const UpdateForm = () => (
        <div className="wrapper">
            <div className="title">
                <h1>Profile Update Form</h1>
            </div><br/>
            <form className="contact-form">
               <div className="input-fields">
                   <div>
                       <label>Full Name :</label><br/>
                       <input type="text" className="input" />
                   </div>
                   <div><br/>
                       <label>Full Name :</label><br/>
                       <input type="text" className="input" />
                   </div><br/>
                   <div>
                       <label>Full Name :</label><br/>
                       <input type="text" className="input" />
                   </div><br/>
               </div>
            </form>
      </div>
    )

    return (
        <>
            {UpdateForm()}
        </>
    )
}

export default UpdateProfile
