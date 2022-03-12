const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');
const API = require('../../controllers/api');

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */

router.post('/register', (req, res) => {
    let { name, username, email, password, confirm_password, role } = req.body

    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Passwords do not match."
        });
    }
    //Check for unique Username
    User.findOne({username: username}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "This Username is taken."
            });          
        }
    })
    //Check for unique Email
    User.findOne({email: email}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "This Email is already registered."
            });          
        }
    });
    //The data is valid, so the user is registered
    let newUser = new User ({
        name,
        username,
        password,
        email,
        role
    });

    //Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "This User is now Registered."
                });
            });
        });
    });
});

/**
 * @route POST api/users/login
 * @desc Login the User
 * @access Public
 */
router.post('/login', (req, res) =>{
    User.findOne({ username: req.body.username }).then(user => {
        if(!user){
            return res.status(404).json({
                msg: "Username does not exist",
                success: false
            });
        }
        //If there is a user, we compare the passwords
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                //User's password is correct, we send the JWT for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
                jwt.sign(payload, key, { 
                    expiresIn: 604800
                }, (err, token) => {
                   res.status(200).json({
                       success: true,
                       token: `Bearer ${token}`,
                       user: user,
                       msg: "You are now logged in."
                   })
                })
            } else{
                return res.status(404).json({
                    msg: "Incorrect password",
                    success: false
                });
            }
        })
    });
});

/**
 * @route POST api/users/login
 * @desc Return the user's data
 * @access Public
 */
router.get('/profileinfo', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/', API.fetchAllUser);
router.get('/:id', API.fetchUserByID);
router.delete('/:id', API.deleteUser);

module.exports = router;