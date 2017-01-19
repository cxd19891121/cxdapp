/**
 * Created by xiaodong chen on 12/19/2016.
 */



(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('visitorCtrl', visitorCtrl);

    visitorCtrl.$inject = [];
    function visitorCtrl() {
        var vm = this;
        vm.title = "Test Title";
        vm.cssList = {
            yeti:"/app/css/yeti/bootstrap.min.css",
            superhero: "/app/css/superhero/bootstrap.min.css",
        }
        vm.css = vm.cssList.superhero;

        vm.changeCss = function(css){
            vm.css = css;
        }

       // vm.changeCss();
    }

})();