/**
 * Created by xiaodong chen on 12/20/2016.
 */

var user = require("./../model/userModel").getModel();

var userService = (function userAPI(){


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

    function getById(id, callback){

        user.findById(id, function(err, findObj){
            if (err) {
                callback(err);
            }else{
                if(findObj.hidden){
                    callback({errMsg:"No such item"});
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
                    callback({errMsg:"No such item"});
                }else{
                    findObj.hidden = true;
                    findObj.save(function (err, obj) {
                        if (err){
                            callback(err);
                        }else{
                            callback(null,{msg:"Item has been removed", item: obj});
                        }
                    });
                }
            }
        });

    }

    function addNew( obj , callback){

        console.log("in addUser function:", obj);

        user.create(JSON.parse(obj), function(err, newObj){
            if (err) {
                callback(err)
                console.log("addUser in err: ",err);
            }else{
                console.log("addUser in success: ",newObj);
                callback(null, {msg: "Item has been added", item: newUser});
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
                callback(null,{msg:"Item has been updated", item: updatedObj});
            }
        })
    }



    return {
        getAllUser: getAll,
        getUser: getById,
        deleteUser: deleteById,
        addUser: addNew,
        updateUserById: updateById,
        addSampleUser: addSample,
    }

})();

module.exports = userService;