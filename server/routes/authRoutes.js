const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const{registerUser,loginUser} = require("../controllers/userController")

const router = express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)



module.exports = router;
