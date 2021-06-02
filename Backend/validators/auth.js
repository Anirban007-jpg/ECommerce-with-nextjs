const {check} = require('express-validator');


exports.userRegisterValidator = [
    check('name').not().isEmpty().withMessage('Name is mandatory for registration!').isLength({max:20}).withMessage("Your name should be less than 20 charecters long"),
    check('email').not().isEmpty().withMessage('Email is mandatory').isEmail().withMessage('Email must be valid'),
    check('password').isLength({min:6}).withMessage('Password must be more or equal to 6 charecters').matches(/\d/).withMessage('Password must contain a number'),
    check('address').not().isEmpty().withMessage('Address is necessary').isLength({max: 80}).withMessage('Adress should be atmost 80 charecters'),
    check('mobile_no').not().isEmpty().withMessage('Mobile no is mandatory').isLength({max:11}).withMessage('Mobile number must be 11 digits long'),
    check('about').not().isEmpty().withMessage('Your Bio is necessary'),
    check('role').not().isEmpty().withMessage('Role of the user is necessary')
];

exports.userSigninValidator = [
    check('email').not().isEmpty().withMessage('Email is mandatory'),
    check('password').not().isEmpty().withMessage('Password is mandatory')
];