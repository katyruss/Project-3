const path = require("path");
const router = require("express").Router();

router.route('/signup')
    .post(function (req, res) {
        console.log('processing');
        res.send('processing the login form!');
    })