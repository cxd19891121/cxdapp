/**
 * Created by xiaodong chen on 1/17/2017.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('navigationCtrl', navigationCtrl);

    navigationCtrl.$inject = ['$scope'];
    function navigationCtrl($scope) {
        var vm = this;
        vm.list = $scope.$parent.cssList;

        $scope.changeCss = function(css){
            $scope.$parent.css = css;
        }



    }

})();