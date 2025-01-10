const {validationResult,check} =require('express-validator');
const validation ={
    addUser : [
        check('email').isEmail().withMessage('A valid email is required'),
        check('password').isLength({min:8}).matches(/^[0-9A-Za-z]{#$%^&*!~"}/).withMessage('Password must be at least')
    ]
}