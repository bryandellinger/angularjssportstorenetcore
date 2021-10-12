(function () {
    'use strict';
    angular.module("cart")
        .directive("cartSummary", cartSummary)

    cartSummary.$inject = ['cartFactory'];

    function cartSummary(cartFactory) {
        var cart = cartFactory;
        var directive = {
            restrict: "E",
            templateUrl: "./src/sportsstore/components/cart/cartSummary.html",
            controller: controller,
            controllerAs: 'vm',
            scope: {
                text: '@'
            },
            bindToController: true
        };
        return directive;

        function controller($scope) {
            var vm = this;
            var cartData = cart.getProducts();
            vm.total = total;
            vm.itemCount = itemCount;


            function total() {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }

            function itemCount() {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }
    }

})();