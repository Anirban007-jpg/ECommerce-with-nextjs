import React,{useEffect,useState} from 'react'
import {getCookie, updateUser} from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import {toast} from 'react-toastify';
import Router from 'next/router';
import { Form } from 'reactstrap';
import FormData from 'form-data';
import "../../static/css/form.css";
    

const UpdateProfile = ({user}) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        mobile_no : '',
        about: '',
        User: '',
        username: '',
        twitter: '',
        facebook: '',
        youtube: '',
        success: '',
        error: '',
        profilepic: '',
        user_for_photo: ''
    });
    const [loading, setLoading] = useState(false);
  
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
        success,
        error,
        profilepic,
        name,
    } = values;

    const [userData, setUserData] = useState(new FormData());
    const [imgfile , setImgFile] = useState('');

    const init = () => {
        getProfile(token).then(data => {
            if (data.error){
                setValues({...values, error: data.error});
            }else{
                setValues({...values, User: data, email: data.email, address: data.address, mobile_no: data.mobile_no, about: data.about, username: data.username, facebook: data.facebook, youtube: data.youtube})
            }
        });
    }

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => e => {
        // console.log(e.target.files[0]);
        const value = name === "profilepic" ? e.target.files[0] : e.target.value;
        const file = name === "profilepic" ? URL.createObjectURL(e.target.files[0]) : '';
        // set form data
        userData.set(name, value);
        setValues({...values, [name]: value, success: '', error: ''});
        setUserData(userData);
    }

    // const imghandle = () => {
        
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        update(token, userData).then(data => {
            if (data.error){
                setValues({ ...values,error:data.error,success: ''});
            } else {
                // update the user in localstorage
                updateUser(data, () => {
                    setValues({ ...values, email: data.email, address: data.address, mobile_no: data.mobile_no, about: data.about, username: data.username, youtube: data.youtube, facebook: data.facebook, success: "User Updated Succesfully"});
                    setLoading(false);
                })
            }
            
        })
    }

    
 
    // building update form
    const UpdateForm = () => (
        <>
            <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="title">Welcome {User.name}! Please Update your Profile</div><hr/>
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
                {/* <div className="input-container ic1">
                    <input id="twitter" className="input" type="text" placeholder=" " value={twitter} onChange={handleChange('twitter')}/>
                    <label for="twitter" className="placeholder pb-3" style={{marginTop: '156px'}}><i className="fas fa-twitter display-6"></i>&nbsp;&nbsp;&nbsp;Twitter Link</label>
                </div> */}
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
            <br/><br/>
            {UpdateForm()}
        </>
    )
}

export default UpdateProfile
