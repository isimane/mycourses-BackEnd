const {validationResult,check} =require('express-validator');
const validation ={
    addUser : [
        check('email')
        .isEmail()
        .withMessage('A valid email is required'),
        check('password')
        .matches(/^[0-9A-Za-z]{\$^#%&*!~"}{8,}$/)
        .withMessage('Password must be at least 8 characters long'),
    ]
}
//middleware to handle validation errors
const errorValidatorHandler =(req,res, next)=>{
    const errors = validationResult(req); //corrected to use validationResult
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }next(); // Proceed the next middleware or routenhandler if no errors were found
}
module.exports={
    validation,
    errorValidatorHandler
}