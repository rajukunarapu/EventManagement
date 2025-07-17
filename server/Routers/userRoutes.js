const express = require('express');
const { signUpController, loginController, logOutController, isAuthenticated } = require('../Controllers/userController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();


router.post('/signup',signUpController)
router.post('/login',loginController)
router.get('/logout',authMiddleware,logOutController)
router.get('/isAuthenticated',authMiddleware,isAuthenticated)


module.exports = router;