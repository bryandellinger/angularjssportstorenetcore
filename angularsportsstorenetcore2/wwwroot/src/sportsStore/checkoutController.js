(function () {
    'use strict';

    angular
        .module('sportsStore')
        .controller('CartSummaryController', CartSummaryController);

    CartSummaryController.$inject = ['cartFactory'];

    /* @ngInject */
    function CartSummaryController(cartFactory) {
        /*jshint validthis: true */
        var vm = this;
        vm.cart = cartFactory;
        vm.cartData = vm.cart.getProducts();
        vm.total = total;
        vm.remove = remove;

        function total() {
            var total = 0;
            for (var i = 0; i < vm.cartData.length; i++) {
                total += (vm.cartData[i].price * vm.cartData[i].count);
            }
            return total;
        }

        function remove(id) {
            vm.cart.removeProduct(id);
        }
     
    }
})();