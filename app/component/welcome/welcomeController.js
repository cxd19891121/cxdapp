/**
 * Created by xiaodong chen on 3/16/2017.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('welcomeCtrl', welcomeCtrl);

    welcomeCtrl.$inject = [];
    function welcomeCtrl() {
        var vm = this;



        vm.webContent = {
            title : "Welcome to cxdApp",
            info: "Angular.js web application.",
            components : [{
                type: "article",
                title: "introduction",
                content: "This web application developed by Xiaodong Chen.",
                other: ""
            },{
                type:"article",
                title:"Tech",
                content: "MEAN stack: Angular.js, Bootstrap, Node.js, Express.js, MongoDB",
                other:""
            },{
                type:"article",
                title:"Other",
                content:"Bootstrap class on this site: " +
                "jumbotron text-center, container, col-sm-4, p text-primary, p bg-primary" +
                "div page-header"

            }

            ]





        }



    }

})();