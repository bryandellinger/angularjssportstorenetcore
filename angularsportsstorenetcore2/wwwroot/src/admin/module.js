(function () {
    'use strict';
    angular.module('admin',
        ["ngRoute", "ngResource"])
        .config(function ($routeProvider) {
            $routeProvider.when("/login", {
                cache: false,
                templateUrl: "./src/sportsStore/views/adminlogin.html"
            });
            $routeProvider.when("/main", {
                cache: false,
                templateUrl: "./src/sportsStore/views/adminMain.html"
            });
            $routeProvider.otherwise({
                cache: false,
                templateUrl: "./src/sportsStore/views/adminlogin.html"
            });
        });
})();