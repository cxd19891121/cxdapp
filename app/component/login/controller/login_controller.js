(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['ajaxService'];

    function loginCtrl(ajaxService) {

        var vm = this;
        vm.title = "Sign In";
        vm.dataLoading = true;
        vm.username = "";
        vm.password = ""

        vm.blur = blur;
        vm.focus = focus;
        vm.login = login;



        function blur(){

        }
        function focus(){
        }

        function login(){};


        (function initController() {

            ajaxService.getAllUser().then(
                function(o){
                    vm.allUser = o.data;
                    vm.messageObj = o.msg;
                }
            )
        })();
    }

})();

