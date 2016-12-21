

var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    var navigation = {
        template:"<h1> This is only a test</h1>"
    }
    var content = {
        templateUrl:"./app/component/working/view/working_view.html"
    }
    var bottom = {
        template: "<h1>Bottom</h1>"
    }

    $stateProvider
        .state("test", {
            url:"/",
            views: {
                "top": navigation,
                "": content,
                "bot": bottom,
            }
    })


    $urlRouterProvider.otherwise("/");
});

