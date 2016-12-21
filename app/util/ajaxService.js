/**
 * Created by xiaodong chen on 12/20/2016.
 */
app.service('ajaxService', ['$http', function ($http) {

    /* All the Url used for Ajax Call */
    var vm = this;
    var baseUrl = "http://localhost:3000/"
    var url = {
        exp: baseUrl + 'exp/',
        user:baseUrl + 'user/',

    }

    /* Custom Ajax API*/
    var AjaxAPI= {
        call : AjaxCall,
        id: AjaxCallById,
        data: AjaxCallWithData,
        all : AjaxCallByIdWithData,
    }


   /*
    READ API for user:
   */

    /* GetAllUser:
    *  param1 : callback , type: function
    *  eg: ajaxService.getAllUser(function(e,o){ ... })*/
    vm.getAllUser = AjaxAPI.call('GET',url.user);

    /* GetUserById:
     *  param1 : userId, type: o_id
     *  param2 : callback, type: function
     *  eg: ajaxService.getAllUserById ( o_id ,function(e,o){...})*/
    vm.getUserById = AjaxAPI.id('GET',url.user);

    /*  AddNewUser:
     *  param1 : newUser, type: user_object  { user: user_data}
     *  param2 : callback, type: function
     *  eg: ajaxService.addNewUser ( {user: new_user_object} , function(e,o){...});*/
    vm.addNewUser = AjaxAPI.data('POST',url.user);

    /*  DeleteUserById:
     *  param1 : userId, type: o_id
     *  param2 : callback, type: function
     *  eg: ajaxService.deleteUserById( o_id, function(e,o){ ... })*/
    vm.deleteUserById = AjaxAPI.id('DELETE', url.user);

    /* GetAllUserById:
     *  param1 : userId, type: o_id
     *  param2 : updatedUser, type: user_object {user: user_data}
     *  param2 : callback, type: function
     *  eg: ajaxService.updateUserById( o_id, updatedUser, function(e,o){ ... })*/
    vm.updateUserById = AjaxAPI.all('PUT',url.user);




    /* Ajax call function: AjaxCall, AjaxCallById, AjaxCallByIdWithData, AjaxCallWithData.
    *  param1 : method, type: String and Enumerate: 'GET', 'POST', 'PUT', 'DELETE'
    *  param2 : url, type: URL
    */
    function AjaxCall(method,url){
        return function(callback){
            $http({
                method: method,
                url: url,
            }).then(function successCallback(data) {
                console.log(data);
                callback(null,data)
            }, function errorCallback(data) {
                console.log("in error callback");
                console.log(data);
                callback(data);
            })
        }
    }

    function AjaxCallById(method,url){
        return function(id,callback){
            $http({
                method: method,
                url: url + id,
            }).then(function successCallback(data) {
                console.log(data);
                callback(null,data)
            }, function errorCallback(data) {
                console.log("in error callback");
                console.log(data);
                callback(data);
            })
        }

    }

    function AjaxCallWithData(method,url){

        return function(data,callback){
            $http({
                method: method,
                url: url,
                data: data,
            }).then(function successCallback(data) {
                console.log(data);
                callback(null,data)
            }, function errorCallback(data) {
                console.log("in error callback");
                console.log(data);
                callback(data);
            })
        }
    }

    function AjaxCallByIdWithData(method, url){

        return function(id,data,callback){
            $http({
                method: method,
                url: url + id,
                data: data,
            }).then(function successCallback(data) {
                console.log(data);
                callback(null,data)
            }, function errorCallback(data) {
                console.log("in error callback");
                console.log(data);
                callback(data);
            })
        }
    }

}])
