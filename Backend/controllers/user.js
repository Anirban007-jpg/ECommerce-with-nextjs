const User = require('../models/User');
const f = require('formidable');
const _ = require('lodash');
const fs = require('fs');

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
            user,

        })
    })
    
}

exports.read = (req,res) => {
    req.profile.password = undefined;
    return res.json(req.profile);
}

exports.profileupdate = (req,res) => {
    let form = new f.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err){
            return res.status(400).json({
                error: 'Image could not be uploaded successfully'
            })
        }

        let user = req.profile;
        user = _.extends(user, fields);

        if(files.profilepic) {
            if (files.profilepic.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb'
                })
            }
            user.profilepic.data = fs.readFileSync(files.profilepic.path);
            user.profilepic.contentType = files.profilepic.type;
        }
    })

    user.save((err,result) => {
        if (err){
            return res.status(400).json({
                error: 'Update User failed'
            })
        }

        user.password = undefined;
        res.status(200).json({
            user,
            message: 'user updated successfully'
        });
    })
}