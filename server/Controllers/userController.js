const bcrypt = require('bcrypt')
const User = require("../Models/userModel");
const { emailValidation, passwordValidation } = require("../Validations/authValidation");

exports.signUpController = async (req, res) => {
    try {
        const { fullName, emailId, password, role, adminCode } = req.body;
        emailValidation(emailId);
        passwordValidation(password);

        if(role === "admin"){
            if(adminCode !== process.env.ADMIN_SECRET_CODE){
                return res.status(403).json({ message : "Invalid admin code. You are not authorized to register as admin." , success : false})
            }
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const document = await User.create({ fullName : fullName, emailId: emailId, password: hashPassword, role : role});

        const token = await document.generateToken();

        res
            .cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            .json({ message: "SignUp successfull", success: true , document : document });

    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

exports.loginController = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        emailValidation(emailId);
        passwordValidation(password);

        const document = await User.findOne({ emailId });
        if (!document) {
            return res.status(404).json({ message: "user not found", success: false })
        }

        const isValidPassword = await document.comparePassword(password)
        if (!isValidPassword) {
            return res.status(400).json({ message: "Wrong credentials", success: false })
        }

        const token = await document.generateToken();

        res
            .cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            .json({ message: "Login successfull", success: true, document : document });

    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};


exports.logOutController = async (req, res) => {
    try {
        res.cookie("token", null, { httpOnly: true, expires: new Date(Date.now()), }).json({ message: "Logout successful", success: true });

    } catch (error) {
        res.status(400).json({ message: error.message, success: false })
    }
};

exports.isAuthenticated = async(req,res)=>{
    try{
        res.json({ message : "User authentication is successfull", success : true })
    }catch(error){
        res.status(400).json({ message : error.message, success : false })
    }
}