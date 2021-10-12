(function () {
    'use strict';

    angular
        .module('sportsStore')
        .controller('SportsStore', SportsStore);

    SportsStore.$inject = ['$http', 'cartFactory', '$location'];

    /* @ngInject */
    function SportsStore($http, cartFactory, $location) {
        /*jshint validthis: true */
        var vm = this;
        vm.cart = cartFactory;
        vm.data = {};
        vm.sendOrder = sendOrder;

        $http({
            method: 'get',
            url: './api/products'
        }).then(function (response) {
            vm.data.products = response.data;
        }, function (error) {
            console.log(error, 'can not get data.');
            vm.data.error = error;
            });


        function sendOrder(shippingDetails) {
            var order = angular.copy(shippingDetails)
            order.products = vm.cart.getProducts();

            $http({
                method: 'post',
                url: './api/order',
                data: order,
            }).then(function (response) {
                vm.data.orderId = response.data.id;
                vm.cart.getProducts().length = 0;
            }).catch(function (e) {
                console.log('Error', e);
                vm.data.orderError = e;
             })
            .finally(function () {
                    $location.path("/complete");
             });
        }

    }
})();