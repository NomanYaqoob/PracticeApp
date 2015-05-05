/**
 * Created by Administrator on 5/5/2015.
 */



app.controller('AppCtrl',['$scope','$http', function ($scope,$http) {

    $http.get('json/weatherAPI.json').
        success(function (data) {
            $scope.weatherList = data;
        }).error(function (error) {
            console.log('Error:' + error);
        })

}]) ;