/**
 * Created by xiaodong chen on 12/19/2016.
 */

app.controller('visitorCtrl',function($scope){
    $scope.title = "Test Title";
    $scope.test = "This is a test";
    var vm = this;
    vm.name = "This is a name";
    console.log('angular test');


    $scope.css = {
        vendor: "app/css/vendor.css",
        auth: "app/css/auth.css",
        app: "app/css/app.css",
        cxd: "app/css/cxdapp.css"
    }
})