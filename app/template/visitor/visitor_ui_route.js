/* created by Xiaodong chen
*  visitor_ui_route : route for visitor template
*  3 main parts: component, view, and stateProvider
*  The visitor template basically has a layout which contains 3 label:
*  <ui-view name = "top">, <ui-view> , <ui-view name="bot">,
*  if you want to add more tag, like <ui-view name = "custom">, in template, please change template file:
*  "./app/template/visitor/visitor.html"
*/

(function () {
    'use strict';


    angular
        .module('cxdApp',['ui.router'])
        .config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        var controllers = {
            loginCtrl: "loginCtrl",
            workingCtrl: "workingCtrl",
            navigationCtrl:"navigationCtrl",
            javaCtrl:"javaCtrl",
            javaUserCtrl:"javaUserCtrl",
            javaNoteCtrl:"javaNoteCtrl",
            welcomeCtrl:"welcomeCtrl",
            jsNoteCtrl:"jsNoteCtrl"
        };

        /* Component part: It is a object which has the HTML contents in it. */
        var component = {

            jsNote:{
                templateUrl:"./app/component/cxd/js_note.html",
                controller:controllers.jsNoteCtrl,
                controllerAs:"vm"
            },
            navigation: {
                templateUrl: "./app/component/navigation/navigation.html",
            },

            working: {
                templateUrl: "./app/component/working/view/working_view.html",
                controller: controllers.workingCtrl,
                controllerAs: "vm"
            },
            bottom: {
                template: "<h1>Bottom</h1>"
            },
            login: {
                templateUrl: "./app/component/login/view/login_view.html",
                controller: controllers.loginCtrl,
                controllerAs: "vm"
            },
            signup:{

                templateUrl:"./app/component/login/view/signup_view.html"
            },
            cssShow: {
                templateUrl:"./app/template/cssShow/cssShow.html",
            },
            original:{
                templateUrl:"./app/template/cssShow/original.html"
            },

            java:{
                templateUrl:"./app/component/javaSpringDemo/java_spring.html",
                controller:controllers.javaCtrl,
                controllerAs:"vm"
            },
            javaUser:{
                templateUrl:"./app/component/javaSpringDemo/java_spring_user.html",
                controller:controllers.javaUserCtrl,
                controllerAs:"vm"
            },
            javaNote:{
                templateUrl:"./app/component/javaSpringDemo/java_note.html",
                controller:controllers.javaNoteCtrl,
                controllerAs:"vm"
            },
            welcome:{
                templateUrl:"./app/component/welcome/welcome.html",
                controller:controllers.welcomeCtrl,
                controllerAs:"vm"
            }
        };

        /* view: It is the view which you can combine different component in it.
         *  Each property in view linked to one html tag in visitor_html:
         *  "top" --- <ui-view name="top">,
         *  ""    --- <ui-view>,
         *  "bot" --- <ui-view name = "bottom">
         * }*/

        var view = {
            index: {
                "top": component.navigation,
                "": component.working,
                "bot": component.bottom
            },
            login: {
                "top": component.navigation,
                "": component.login
            },

            signup:{
                "top":component.navigation,
                "":component.signup
            },
            cssShow:{
                "top":component.navigation,
                "":component.cssShow
            },
            original:{
                "":component.original
            },
            javaSpring:{
                "top":component.navigation,
                "":component.java
            },
            javaSpringUser:{
                "top":component.navigation,
                "":component.javaUser
            },
            javaSpringNote:{
                "top":component.navigation,
                "":component.javaNote
            },
            welcome:{
                "top":component.navigation,
                "":component.welcome
            },
            jsNote:{
                "top":component.navigation,
                "":component.jsNote
            }

        };


        /* stateProvider connect the views with different url, and add a state name in it*/
        $stateProvider
            .state("index", {
                url: "/",
                views: view.index
            })
            .state("login", {
                url: "/login",
                views: view.login
            })
            .state("test",{
                url:'/test',
                views:view.cssShow
            })
            .state("signup",{
                url:'/signup',
                views:view.signup
            })

            .state('original',{
                url:'/original',
                views:view.original
            })
            .state("java",{
                url:"/java",
                views:view.javaSpring,
            })
            .state("java_user",{
                url:"/java/user/:id",
                views:view.javaSpringUser
            })
            .state("java_note",{
                url:"/java/note/:id",
                views:view.javaSpringNote
            })
            .state("welcome",{
                url:"/welcome",
                views: view.welcome,
            })
            .state("cxd",{
                url:"/cxd",
                views: view.jsNote,

            })

        ;


        $urlRouterProvider.otherwise("/");
    }


})();


