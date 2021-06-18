const User = require('../models/User');
const _ = require('lodash');

exports.getuserById = (req,res) => {
    const userId = req.params.userId;
    let user
    

    User.findOne({_id : userId}).exec((err,data) => {
        
        if (err){
           return res.status(404).json({
               error: err
           })
        }
        
        user = data;
        res.status(200).json({
            user
        })
    })
    
}