/**
 * Created by xiaodong chen on 12/19/2016.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('workingCtrl', workingCtrl);

    workingCtrl.$inject = ['ajaxService'];
    function workingCtrl(ajaxService) {
        var vm = this;

        vm.message = "正在施工中。。。"

        vm.allUser =[];

        vm.messageObj = {};



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