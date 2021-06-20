import React,{useEffect,useState} from 'react'
import {getCookie} from '../../actions/auth';
import { getProfile } from '../../actions/user';
import "../../static/css/form.css";

const UpdateProfile = ({user}) => {

    const [values, setValues] = useState({
        email: user.email,
        address: user.address,
        mobile_no : user.mobile_no,
        about: user.about,
        User: '',
        username: user.username,
        twitter: user.twitter,
        facebook: user.facebook,
        youtube: user.youtube,
        loading: false,
        success: '',
        error: '',
        profilepic: '',
        userData: '',
        user_for_photo: '',
        file: null
    });
  

    

    const token = getCookie('token');
    const { email,
        address,
        mobile_no,
        about,
        User,
        username,
        twitter,
        facebook,
        youtube,
        loading,
        success,
        error,
        profilepic,
        userData,
        file
    } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error){
                setValues({...values, error: data.error});
            }else{
                setValues({...values, User: data})
            }
        });
    }

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => e => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
 
    // building update form
    const UpdateForm = () => (
     <>
            <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="title">Welcome</div>
                <div className="subtitle">Update Your Profile!</div>
                <div className="input-container ic1">
                    <input id="email" className="input" type="text" placeholder=" " value={email} onChange={handleChange('email')}/>
                    <label for="email" className="placeholder pb-3"><i className="fas fa-envelope display-6"></i>&nbsp;&nbsp;&nbsp;Email</label><br/>
                </div>
                <div className="input-container ic1">
                    <textarea id="address" className="input" type="text" placeholder=" " rows="2" value={address} onChange={handleChange('address')}/>
                    <label for="address" className="placeholder pb-3"><i className="fas fa-home display-6"></i>&nbsp;&nbsp;&nbsp;Address</label><br/>
                </div>
                <div className="input-container ic2">
                    <input id="mobile_no" className="input" type="text" placeholder=" " value={mobile_no} onChange={handleChange('mobile_no')}/>
                    <label for="mobile_no" className="placeholder pb-3 mt-4"><i className="fa fa-phone display-6"></i>&nbsp;&nbsp;&nbsp;Phone Number</label>
                </div>
                <div className="input-container ic2">
                    <textarea id="about" className="input" type="text" placeholder=" " rows="5" value={about} onChange={handleChange('about')}/>
                    <label for="about" className="placeholder pb-3 mt-4"><i class="fas fa-address-book display-6"></i>&nbsp;&nbsp;&nbsp;Bio</label>
                </div>
                <div className="input-container ic2">
                    <input id="username" className="input" type="text" placeholder=" " value={username} onChange={handleChange('username')}/>
                    <label for="username" className="placeholder pb-3" style={{marginTop: '166px'}}><i className="fas fa-user display-6"></i>&nbsp;&nbsp;&nbsp;Change Username:</label>
                </div>
                <div className="input-container ic1">
                    <input id="twitter" className="input" type="text" placeholder=" " value={twitter} onChange={handleChange('twitter')}/>
                    <label for="twitter" className="placeholder pb-3" style={{marginTop: '156px'}}><i className="fas fa-twitter display-6"></i>&nbsp;&nbsp;&nbsp;Twitter Link</label>
                </div>
                  <div className="input-container ic2">
                    <input id="youtube" className="input" type="text" placeholder=" " value={youtube} onChange={handleChange('youtube')}/>
                    <label for="youtube" className="placeholder pb-3" style={{marginTop: '176px'}}><i className="fab fa-youtube display-6"></i>&nbsp;&nbsp;&nbsp;Youtube Link</label>
                </div>
                <div className="input-container ic2">
                    <input id="facebook" className="input" type="text" placeholder=" " value={facebook} onChange={handleChange('facebook')}/>
                    <label for="facebook" className="placeholder pb-3" style={{marginTop: '176px'}}><i className="fab fa-facebook display-6"></i>&nbsp;&nbsp;&nbsp;Facebook Link</label>
                </div>
                <div className="input-container ic1">
                    {/* <input type="file" accept="image/*" placeholder=" " onChange={handleImg()} /> */}
                    <input id="profilepic" className="input" type="file" accept="image/*" placeholder=" " onChange={handleChange('profilepic')} />
                    <label for="profilepic" className="placeholder pb-3" style={{marginTop: '186px'}}><i class="fas fa-id-badge display-6"></i>&nbsp;&nbsp;&nbsp;Profile Picture</label>
                </div>
                <div>
                    <button type="text" className="submit">Update Profile</button>
                </div>
            </form>
     </>   
    )

    return (
        <>
            {UpdateForm()}
        </>
    )
}

export default UpdateProfile
