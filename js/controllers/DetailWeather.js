/**
 * Created by noman on 07-May-15.
 */


app.controller("DetailWeather", function ($scope, $routeParams, $http) {
    console.log("json/weatherParameters/'+ $routeParams.weatherId +'.json");
    $http.get('json/weatherParameters/'+ $routeParams.weatherId +'.json').success(function(data) {
        $scope.weatherDetail = data;
    })
});