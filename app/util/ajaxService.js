/**
 * Created by xiaodong chen on 12/20/2016.
 */

(function () {
    angular
        .module('cxdApp')
        .factory('ajaxService', ajaxService);

    ajaxService.$inject = ['$http'];
    function ajaxService($http) {


        /* All the Url used for Ajax Call */
        var urlList = {
            heroku: "http://cxdapp.herokuapp.com/",
            local:"http://localhost:3000/",
            javaSpring:"https://cxd-java-spring-mvc.herokuapp.com/"

        };
        var baseUrl = urlList.heroku;
        // baseUrl = urlList.local;
        var url = {
            exp: baseUrl + 'exp/',
            user: baseUrl + 'user/',
            javaUser: urlList.javaSpring + 'user/',
            javaNote: urlList.javaSpring + 'note/',
        }

        var flag = {
            test : false
        }


        var service = {
            // ajax call for user.
            getAllUser : getAllUser,
            getUserById : getUserById,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUserById : updateUserById,

            javaGetAllUser: javaGetAllUser,
            javaGetUserById: javaGetUserById,
            javaDeleteUserById: javaDeleteUserById,
            javaAddNewUser: javaAddNewUser,
            javaUpdateUser: javaUpdateUser,
            javaGetAllNote: javaGetAllNote,
            javaGetNoteById:javaGetNoteById,
            javaGetNoteByUser: javaGetNoteByUser,
            javaAddNote:javaAddNote,
            javaUpdateNote:javaUpdateNote,
            javaDeleteNoteById: javaDeleteNoteById

        };



        return service;


        /*  getAllUser: get all the user data from database.
         *  param : null
         *  return : array[user_obj]
         */
        function getAllUser(){
            return $http.get(url.user).then( handleSuccess, handleError );
        }

        /*  getUserById: get the user data from database.
         *  param1 : userId, type: o_id
         *  return : user_obj
         */
        function getUserById(id){
            return $http.get(url.user + id).then( handleSuccess, handleError);
        }

        /*  createUser: create new user
         *  param1 : user_obj
         *  return : user_obj
         */
        function createUser(user){
            return $http.post(url.user, user).then( handleSuccess, handleError);
        }

        function deleteUserById(id){
            return $http.delete(url.user + id).then( handleSuccess, handleError);
        }

        function updateUserById(id,user){
            return $http.put(url.user + id, user).then( handleSuccess, handleError);
        }


        /* ajax call for java component:
        * READ for user and note*/

        function javaGetAllUser(){
            return $http.get(url.javaUser).then( handleSuccess, handleError );
        }

        function javaGetUserById(id){
            return $http.get(url.javaUser+id ).then( handleSuccess, handleError );
        }

        function javaAddNewUser(user){
            return $http.post(url.javaUser, user).then( handleSuccess, handleError);
        }

        function javaUpdateUser(user){
            return $http.put(url.javaUser,user).then( handleSuccess, handleError);
        }


        function javaDeleteUserById(id){
            return $http.delete(url.javaUser + id).then( handleSuccess, handleError);
        }

        function javaGetAllNote(){
            return $http.get(url.javaNote).then( handleSuccess, handleError );
        }

        function javaGetNoteById(id){
            return $http.get(url.javaNote + id).then( handleSuccess, handleError );
        }

        function javaGetNoteByUser(userId){
            return $http.get(url.javaNote + "/user/"+ userId).then(handleSuccess,handleError);
        }

        function javaAddNote(note){
            return $http.post(url.javaNote, note).then( handleSuccess, handleError);
        }

        function javaUpdateNote(note){
            return $http.put(url.javaNote, note).then( handleSuccess, handleError);
        }

        function javaDeleteNoteById(id){
            return $http.delete(url.user + id).then( handleSuccess, handleError);
        }








        /* callback handle function */
        function handleSuccess(res){
            if(flag.test){
                console.log("success call", res);
            }
            return res.data;
        }

        function handleError(error){

            if (flag.test) {
                console.log("error call", error);
            }
            return error;

        }






    //     /* Custom Ajax API*/
    //     var AjaxAPI = {
    //         call: AjaxCall,
    //         id: AjaxCallById,
    //         data: AjaxCallWithData,
    //         all: AjaxCallByIdWithData,
    //     }
    //
    //
    //
    //     /*
    //      READ API for user:
    //      */
    //
    //     /* GetAllUser:
    //      *  param1 : callback , type: function
    //      *  eg: ajaxService.getAllUser(function(e,o){ ... })*/
    //     vm.getAllUser = AjaxAPI.call('GET', url.user);
    //
    //     /* GetUserById:
    //      *  param1 : userId, type: o_id
    //      *  param2 : callback, type: function
    //      *  eg: ajaxService.getAllUserById ( o_id ,function(e,o){...})*/
    //     vm.getUserById = AjaxAPI.id('GET', url.user);
    //
    //     /*  AddNewUser:
    //      *  param1 : newUser, type: user_object  { user: user_data}
    //      *  param2 : callback, type: function
    //      *  eg: ajaxService.addNewUser ( {user: new_user_object} , function(e,o){...});*/
    //     vm.addNewUser = AjaxAPI.data('POST', url.user);
    //
    //     /*  DeleteUserById:
    //      *  param1 : userId, type: o_id
    //      *  param2 : callback, type: function
    //      *  eg: ajaxService.deleteUserById( o_id, function(e,o){ ... })*/
    //     vm.deleteUserById = AjaxAPI.id('DELETE', url.user);
    //
    //     /* GetAllUserById:
    //      *  param1 : userId, type: o_id
    //      *  param2 : updatedUser, type: user_object {user: user_data}
    //      *  param2 : callback, type: function
    //      *  eg: ajaxService.updateUserById( o_id, updatedUser, function(e,o){ ... })*/
    //     vm.updateUserById = AjaxAPI.all('PUT', url.user);
    //
    //
    //     /* Ajax call function: AjaxCall, AjaxCallById, AjaxCallByIdWithData, AjaxCallWithData.
    //      *  param1 : method, type: String and Enumerate: 'GET', 'POST', 'PUT', 'DELETE'
    //      *  param2 : url, type: URL
    //      */
    //     function AjaxCall(method, url) {
    //         return function (callback) {
    //             $http({
    //                 method: method,
    //                 url: url,
    //             }).then(function successCallback(data) {
    //                 console.log(data);
    //                 callback(null, data)
    //             }, function errorCallback(data) {
    //                 console.log("in error callback");
    //                 console.log(data);
    //                 callback(data);
    //             })
    //         }
    //     }
    //
    //     function AjaxCallById(method, url) {
    //         return function (id, callback) {
    //             $http({
    //                 method: method,
    //                 url: url + id,
    //             }).then(function successCallback(data) {
    //                 console.log(data);
    //                 callback(null, data)
    //             }, function errorCallback(data) {
    //                 console.log("in error callback");
    //                 console.log(data);
    //                 callback(data);
    //             })
    //         }
    //
    //     }
    //
    //     function AjaxCallWithData(method, url) {
    //
    //         return function (data, callback) {
    //             $http({
    //                 method: method,
    //                 url: url,
    //                 data: data,
    //             }).then(function successCallback(data) {
    //                 console.log(data);
    //                 callback(null, data)
    //             }, function errorCallback(data) {
    //                 console.log("in error callback");
    //                 console.log(data);
    //                 callback(data);
    //             })
    //         }
    //     }
    //
    //     function AjaxCallByIdWithData(method, url) {
    //
    //         return function (id, data, callback) {
    //             $http({
    //                 method: method,
    //                 url: url + id,
    //                 data: data,
    //             }).then(function successCallback(data) {
    //                 console.log(data);
    //                 callback(null, data)
    //             }, function errorCallback(data) {
    //                 console.log("in error callback");
    //                 console.log(data);
    //                 callback(data);
    //             })
    //         }
    //     }
    //



     }

})();
