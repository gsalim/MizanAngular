var app = angular.module('myApp', ['ui.router']);

app.value('AppInfo', {userId: '', version: '1.0.0', buildId: 'web.001'});

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "pages/home.html",
                    controller: 'HomeController'
                })
                .state('login', {
                    url: "/login",
                    templateUrl: "pages/login.html"
//                    controller: 'LoginCtrl'
                });
    }]);



app.controller("HomeController", function ($scope, AppInfo, $http) {
    $scope.name = "Alim";
    $scope.age = "30";
    $scope.version = AppInfo.version;
});

//
//app.controller("myCtrl2", function ($scope) {
//    $scope.name = "Mizan";
//    $scope.age = "24";
//});
//
//app.controller("formController", function ($scope) {
//
//    $scope.showInfo = function () {
//        $scope.output = "Your Name is " + $scope.name + " and id = " + $scope.id;
//    };
//
//    $scope.clearMessage = function () {
//        $scope.output = "";
//    };
//
//});
