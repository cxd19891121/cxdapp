/**
 * Created by xiaodong chen on 12/20/2016.
 * userService.js
 * This service is to implement userModel function
 *
 */

var user = require("./../model/userModel").getModel();
var STRING = require('./../config/STRING');

var userService = (function userAPI(){
    //console.log(user);


    var API = {
        getAllUser: getAll,
        getUser: getById,
        deleteUser: deleteById,
        addUser: addNew,
        updateUserById: updateById,
        getByName: getByName,
        getByEmail: getByEmail,
        checkIdentify: getByNameWithPassword
    }

    function getByNameWithPassword(username,password,callback){
        console.log(username);
        console.log(password);
        user.findOne({'username':username ,'password':password}, function (err, findObj) {
            if (err) {
                callback(err);
            }else{
                if(findObj) {
                    callback(null, findObj);
                }else{
                    callback()
                }
            }
        })
    }

    function getAll(callback){
        user.find({}, function(err, objArr){
            if(err){
                callback({error:err, msg: STRING.ERROR_USER_GET_ALL});
            }else{
                callback({data:objArr, msg: STRING.SUCCESS_USER_GET_ALL});
            }
        });
    }

    function getByName(name,callback){
        user.findOne({'username':name }, function (err, findObj) {
            if (err) {
                callback({error:err, msg: STRING.ERROR_USER_GET_BY_NAME});
            }else{
                callback ( {data:findObj, msg: STRING.SUCCESS_USER_GET_BY_NAME});
            }

        })
    }

    function getByEmail ( email,callback){
        user.findOne( {'email': email},function(err,findObj){
            if(err){
                callback( {error:err, msg: STRING.ERROR_USER_GET_BY_EMAIL});
            }else{
                callback ({data:findObj, msg: STRING.SUCCESS_USER_GET_BY_EMAIL});
            }
        })
    }


    function getById(id,callback){

        user.findById(id, function(err, findObj){
            if (err) {
                callback ({error:err, msg: STRING.ERROR_USER_GET_BY_ID});
            }else{
                if(findObj.hidden){
                    callback( {data: {}, msg:STRING.SUCCESS_USER_GET_BY_ID});
                }else {
                    callback ({data:findObj, msg:STRING.SUCCESS_USER_GET_BY_ID});
                }
            }
        });
    }

    function deleteById(id,callback){

        user.findById(id, function(err, findObj){
            if (err) {
                callback ({error:err, msg: STRING.ERROR_USER_DELETE_BY_ID});
            }else{

                findObj.hidden = true;
                findObj.save(function (err, obj) {
                    if (err){
                        callback ({error:err, msg: STRING.ERROR_USER_DELETE_BY_ID});
                    }else{
                        callback ({data:obj, msg: STRING.SUCCESS_USER_DELETE_BY_ID});
                    }
                });

            }
        });

    }

    function addNew(obj,callback){

        console.log("in addUser function:", obj);

        user.create(obj, function(err, newObj){
            if (err) {
                callback ({error:err, msg: STRING.ERROR_USER_ADD});
            }else{
                callback ({data:newObj, msg:  STRING.SUCCESS_ADD_ITEM});
            }
        });
    }

    function updateById (id, tarObj, callback){

        user.findByIdAndUpdate(id, tarObj, function(err, updatedObj){
            if(err){
                callback ({error:err, msg: STRING.ERROR_UPDATED_ITEM});
            }else{
                callback ({data:updatedObj, msg: STRING.SUCCESS_UPDATED_ITEM});
            }
        })
    }
    return API;

})();

module.exports = userService;