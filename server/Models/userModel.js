const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator")


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    emailId: {
        unique: true,
        type: String,
        required: true,
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            message : "{VALUE} is not a valid mail "
        }
    },
    password: {
        type: String,
        required: true,
        validate : {
            validator : function(value){
                return validator.isStrongPassword(value)
            },
            message : "{VALUE} is not a strong password "
        }
    },
    role : {
        type : String,
        enum : {
            values : [ "user", "admin" ],
            message : "{VALUE} is not valid"
        },
        default : "user"
    }
}, {
    timestamps: true
}
)


userSchema.methods.generateToken = function () {
    const token = jwt.sign(
        { id: this._id, role : this.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" }
    );
    return token
}

userSchema.methods.comparePassword = async function (password) {
    const isValid = await bcrypt.compare(password, this.password)
    return isValid
}



const User = mongoose.model('User', userSchema)

module.exports = User;