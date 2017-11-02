/**
 * Created by xiaodong chen on 2/20/2017.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('javaCtrl', javaCtrl);

    javaCtrl.$inject = ['ajaxService'];

    function javaCtrl(ajaxService) {

        var vm = this;
        vm.currentUser = {};

        (function initController() {

            ajaxService.javaGetAllUser().then(
                function(o){
                    vm.users = o;
                    console.log("javaGetAllUser",o);

                    ajaxService.javaGetAllNote().then(
                        function(o){
                            vm.notes = o;
                            console.log("javaGetAllNote",o);
                        }
                    )
                }
            )
        })();

        vm.createUser = function createNewUser(){
            ajaxService.javaAddNewUser(vm.currentUser).then(
                function(o){
                    console.log("add new user",o);
                }
            )
        }

        vm.deleteUserById = function deleteUserById(id){
            ajaxService.javaDeleteUserById(id).then(
                function(o){
                    console.log(o);
                }
            )
        }
    }

})();
