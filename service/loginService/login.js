/**
 * Created by xiaodong chen on 12/21/2016.
 */
var userService = require('./../userService');
var session = require('./../session/sessionService');
var STRING = require('./../../config/STRING');
var md5 = require('md5');


var login = (function loginAPI(){

    var API = {
        login : login,
        verifyUsername: verifyUsername,
        signup :signup,
        verifyEmail: verifyEmail,
    }

    function verifyEmail(req,res){
        var email = req.params.email;
        userService.getByEmail(email,function(e,o){
            if(e){
                res.send({error:e});
            }else if(o){
                res.send({error: STRING.ERROR_DUPLICATE_EMAIL});
            }else{
                res.send({error: STRING.SUCCESS_UNIQUE_EMAIL});
            }
        })
    }

    function verifyUsername(req,res){
        var username = req.params.username;

        userService.getByName(username,function(e,o){
            if(e){
                res.send({error:e});
            }else if(o){
                res.send({error: STRING.ERROR_DUPLICATE_USERNAME});
            }else{
                res.send({success: STRING.SUCCESS_UNIQUE_USERNAME});
            }
        })
    }

    function login(req,res){

        var username = req.body['username'];
        var password = req.body['password'];

        //md5 data encryption
        var hiddenPassword = md5(password);

        userService.checkIdentify(username,hiddenPassword,function(e,findUser){
            if(e){
                res.send(e);
            }else{

                /* Store user info as session in "req.session.data" */
               session.storeInData(req,findUser);
               res.send(findUser);
            }
        })
    }

    function signup(req,res){
        var newUser = req.body['user'];
        newUser.password = md5(newUser.password);
        userService.addUser(newUser,function(e,o){
            if(e){
                res.send(e);
            }else{
                res.send(o)
            }
        })
    }


    return API;

})()

module.exports = login;