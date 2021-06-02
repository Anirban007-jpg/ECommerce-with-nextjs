const User = require('../models/User');
const sid = require('shortid');
const jwt = require('jsonwebtoken');
const ejwt = require('express-jwt');
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
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    // check whether password matches confirmed_password and confimrmed password is blank or not
    if (confirmed_password === null){
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


exports.Login = (req,res) => {
    // accept email and password from frontend
    const {email, password} = req.body;

    // check if user with this email exist or not exist
    User.findOne({email}).exec((err, data) => {
        // check if data is present or not
        if (err){
            return res.status(400).json({
                error: err
            })
        }
        if (!data){
            return res.status(400).json({
                error: 'Such an user does not exist'
            })
        }

        // if user present
        // checking password given is right or Wrong
        var checked = bcrypt.compareSync(password, data.password);


        // if password is wrong
        if (!checked) {
            return res.status(403).json({
                error: 'Wrong Password entered'
            })
        }

        // if password is right
        // generate json web token
        const token = jwt.sign({_id: data._id}, process.env.JWT_SECRET, {expiresIn: '18h'});

        // generate cookie and send it to Frontend
        res.cookie('token',token,{expiresIn: '18h'});
        const {_id,registered_on,name,email,address,mobile_no,about,role,username} = data;
        // send all data to Frontend
        return res.status(200).json({
            token,
            user: {_id,registered_on,name,email,address,mobile_no,about,role,username},
            message: "User Signed in Successfully"
        });
    })
}

exports.Logout = (req,res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "Signout Successful"
    });
}


exports.requireSignin = ejwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS512'],
    userProperty: "auth"
});