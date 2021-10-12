(function () {
    'use strict';
    angular.module('sportsStore',
        ["customFilters", "cart", "ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider.when("/complete", {
                cache: false,
                templateUrl: "./src/sportsStore/views/thankyou.html"
            });
            $routeProvider.when("/placeOrder", {
                cache: false,
                templateUrl: "./src/sportsStore/views/placeOrder.html"
            });
            $routeProvider.when("/checkout", {
                cache: false,
                templateUrl: "./src/sportsStore/views/checkoutSummary.html"
            });
            $routeProvider.when("/products", {
                cache: false,
                templateUrl: "./src/sportsStore/views/productList.html"
            });
            $routeProvider.otherwise({
                cache: false,
                templateUrl: "./src/sportsStore/views/productList.html"
            });
        });
})();