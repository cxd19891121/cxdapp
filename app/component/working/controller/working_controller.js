/**
 * Created by xiaodong chen on 12/19/2016.
 */
app.controller('workingCtrl',function($scope,ajaxService){

    $scope.message = "正在施工中。。。"

    $scope.allUser =[];

    $scope.messageObj = {};

    console.log($scope.message);

    ajaxService.getAllUser(function(e,o){
        if(e){
            $scope.message  = e
        }else{
            $scope.allUser  = o;
        }
    })

})