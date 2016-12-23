/**
 * Created by xiaodong chen on 12/23/2016.
 */
var express = require('express');
var router = express.Router();
var loginService = require('./../service/loginService/login');



router.post('/login', loginService.login);
router.post('/signup', loginService.signup);
router.get('/uniqueEmail/:email',loginService.verifyEmail);
router.get('/uniqueUsername/:username',loginService.verifyUsername);


module.exports = router;