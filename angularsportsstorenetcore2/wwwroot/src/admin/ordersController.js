(function () {
    'use strict';

    angular
        .module('admin')
        .controller('OrdersController', OrdersController);

    /* @ngInject */
    OrdersController.$inject = ['$http', '$filter'];

    function OrdersController($http, $filter) {
        /*jshint validthis: true */
        var vm = this;
        vm.orders = [];
        vm.error = {};
        vm.selectedOrder = null;
        vm.selectOrder = selectOrder;
        vm.calcTotal = calcTotal;

        $http({
            method: 'get',
            url: './api/order'
        }).then(function (response) {
            console.log(response);
            vm.orders = response.data;
        }, function (error) {
            console.log(error, 'can not get orders.');
            vm.error = error;
            });

        function selectOrder(order) {
            vm.selectedOrder = order;
        }

        function calcTotal(order) {
            var total = 0;
            for (var i = 0; i < order.products.length; i++) {
                total += order.products[i].count * order.products[i].price;
            }
            return $filter('currency')(total);
        }

    }
})();