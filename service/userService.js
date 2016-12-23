/**
 * Created by xiaodong chen on 12/20/2016.
 * userService.js
 * This service is to implement userModel function
 *
 */

var user = require("./../model/userModel").getModel();
var STRING = require('./../config/STRING');

var userService = (function userAPI(){

    var API = {
        getAllUser: getAll,
        getUser: getById,
        deleteUser: deleteById,
        addUser: addNew,
        updateUserById: updateById,
        addSampleUser: addSample,
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
                callback(err);
            }else{
                callback(null, objArr);
            }
        });
    }

    function addSample(Id,callback) {
        //Config the sample obj
        var name = "admin" + Id;
        var password = "password";
        var email = "admin@example.com";
        var sample =
            {
                username: name,
                password: password,
                email:  email,
                level: 2,
            };

        //create new sampleUser and save to the DataBase
        user.create(sample, function(err, newObj){
            if (err) {
                callback(err);
            }else{
                callback(null,newObj);
            }
        });
    }

    function getByName(name, callback){
        user.findOne({'username':name }, function (err, findObj) {
            if (err) {
                callback(err);
            }else{
                callback(null,findObj);
            }

        })
    }

    function getByEmail ( email,callback){
        user.findOne( {'email': email},function(err,findObj){
            if(err){
                callback(err)
            }else{
                callback(null,findObj)
            }
        })
    }


    function getById(id, callback){

        user.findById(id, function(err, findObj){
            if (err) {
                callback(err);
            }else{
                if(findObj.hidden){
                    callback({error:STRING.ERROR_NO_ITEM});
                }else {
                    callback(null, findObj);
                }
            }
        });
    }

    function deleteById(id, callback ){

        user.findById(id, function(err, findObj){
            if (err) {
                callback(err)
            }else{
                if(findObj.hidden){
                    callback({error: STRING.ERROR_NO_ITEM});
                }else{
                    findObj.hidden = true;
                    findObj.save(function (err, obj) {
                        if (err){
                            callback(err);
                        }else{
                            callback(null,{msg:STRING.SUCCESS_DELETE_ITEM, item: obj});
                        }
                    });
                }
            }
        });

    }

    function addNew( obj , callback){

        console.log("in addUser function:", obj);

        user.create(obj, function(err, newObj){
            if (err) {
                callback(err)
                console.log("addUser in err: ",err);
            }else{
                console.log("addUser in success: ",newObj);
                callback(null, {msg: STRING.SUCCESS_ADD_ITEM, item: newObj});
            }
        });
    }

    function updateById (id, tarObj, callback){
        console.log("in func updateUserById",tarObj);
        user.findByIdAndUpdate(id, JSON.parse(tarObj), function(err, updatedObj){
            if(err){
                callback(err);
            }else{
                console.log(updatedObj);
                callback(null,{msg: STRING.SUCCESS_UPDATED_ITEM, item: updatedObj});
            }
        })
    }
    return API;

})();

module.exports = userService;