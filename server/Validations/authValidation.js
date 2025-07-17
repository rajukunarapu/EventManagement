const validator = require('validator')

exports.emailValidation = (email)=>{
    if(!validator.isEmail(email)){
        throw new Error("Enter a valid emailId")
    }
}

exports.passwordValidation = (password)=>{
    if(!validator.isStrongPassword(password)){
        throw new Error("Enter a strong password")
    }
}