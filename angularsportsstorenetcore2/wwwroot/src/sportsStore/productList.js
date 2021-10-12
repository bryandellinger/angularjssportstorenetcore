(function () {
    'use strict';

    angular
        .module('sportsStore')
        .controller('ProductList', ProductList);

    ProductList.$inject = ['$filter', 'cartFactory'];

    /* @ngInject */
    function ProductList($filter, cartFactory) {
        /*jshint validthis: true */
        var vm = this;
        vm.cart = cartFactory;
        vm.selectedCategory = null;
        vm.productListPageCount = 3;
        vm.pageSize = 3;
        vm.selectedPage = 1;
        vm.productListActiveClass = 'btn-primary';
        vm.selectCategory = selectCategory;
        vm.categoryFilterFn = categoryFilterFn;
        vm.getCategoryClass = getCategoryClass;
        vm.selectPage = selectPage;
        vm.getPageClass = getPageClass;
        vm.addProductToCart = addProductToCart;

        function selectCategory(newCategory) {
            vm.selectedCategory = newCategory ? newCategory : null;
            vm.selectedPage = 1;
        }

        function categoryFilterFn(product) {
            return vm.selectedCategory == null || product.category == vm.selectedCategory;
        }

        function getCategoryClass(category) {
            return vm.selectedCategory == category ? 'btn-primary' : '';
        }

        function selectPage(newPage) {
            vm.selectedPage = newPage;
        }

        function getPageClass(page) {
            vm.selectedPage == page ? vm.productListActiveClass : '';
        }

        function addProductToCart(product) {
            vm.cart.addProduct(product.id, product.name, product.price);
        }


    }
})();