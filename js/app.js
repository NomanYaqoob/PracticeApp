/**
 * Created by Administrator on 5/5/2015.
 */


var app = angular.module('myApp',['ngMaterial','ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/weather',{
        templateUrl: 'partial/item-list.html',
        controller: 'AppCtrl'
    }).when('/weather/:weatherId',{
        templateUrl: 'partial/item-detail.html',
        controller: 'DetailWeather'
    }).otherwise({
        redirectTo:'/weather'
    })
}]);



