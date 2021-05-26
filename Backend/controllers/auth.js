const User = require('../models/User');
const sid = require('shortid');
require('dotenv').config()

const bcrypt = require('bcrypt');

exports.Register = (req, res) => {

    // Check if the user is already registered
    User.findOne({email: req.body.email}).exec((err,data) => {
        if (data){
          return res.status(400).json({
            error: "User already exsists"
          })
        }
    })

    // Create all the variables
    const {name,email,password,confirmed_password,address,mobile_no,about,role} = req.body;
    let username = sid.generate();
    let profile = `${process.env.CLIENT_URL}/profile/username`;

    if (confirmed_password === ""){
        return res.status(403).json({
            error: "Confirm your password"
        })
    }

    if (password !== confirmed_password){
        return res.status(403).json({
            error: "Password do not match"
        })
    }
    // hash password and transfer it to a global variable
    var password1 = bcrypt.hashSync(password,10);

    
    // register user
    let user = new User({
        name,
        email,
        password:password1,
        address,
        mobile_no,
        about,
        role,
        username,
        profile       
    });
    
    user.save((err, result) => {
        if (err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            message: "You have been registered successfully!"
        });
    })



}