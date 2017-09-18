var app = angular.module('myApp',[]);

app.value('AppInfo', {userId: '',version: '1.0.0',buildId: 'web.001'});

app.controller("myCtrl",function($scope, AppInfo,$http){
    $scope.name = "Alim";
    $scope.age = "30";
    $scope.version = AppInfo.version;
});

app.controller("myCtrl2",function($scope){
    $scope.name = "Mizan";
    $scope.age = "24";
});
