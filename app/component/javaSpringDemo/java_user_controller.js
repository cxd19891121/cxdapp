/**
 * Created by xiaodong chen on 2/20/2017.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('javaUserCtrl', javaUserCtrl);

    javaUserCtrl.$inject = ['ajaxService','$stateParams'];

    function javaUserCtrl(ajaxService ,$stateParams) {

        var vm = this;
        vm.user = {};
        vm.notes = [];


        (function initController() {
            var id = $stateParams.id;
            console.log("user id stateParams",id);
            ajaxService.javaGetUserById(id).then(function(userData){
                vm.user = userData;
                console.log("userData",userData);
                ajaxService.javaGetNoteByUser(id).then(function(noteArr){
                    vm.notes = noteArr;
                    console.log("note",noteArr);
                })
            })
        })();
    }

})();/**
 * Created by xiaodong chen on 2/20/2017.
 */
