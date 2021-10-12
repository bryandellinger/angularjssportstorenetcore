(function () {
    'use strict';

    angular
        .module('admin')
        .controller('ProductsController', ProductsController);

    /* @ngInject */
    ProductsController.$inject = ['$resource'];

    function ProductsController($resource) {
        var vm = this;
        vm.products = [];
        vm.editedProduct = null;
        vm.productUrl = './api/products/';
        vm.productsResource = $resource(vm.productUrl + ":id", { id: "@id" });
        vm.listProducts = listProducts;
        vm.deleteProduct = deleteProduct;
        vm.createProduct = createProduct;
        vm.updateProduct = updateProduct;
        vm.startEdit = startEdit;
        vm.cancelEdit = cancelEdit;

       /* activate */
        vm.listProducts();

        /****************functions***************** */
        function listProducts() {
            vm.products = vm.productsResource.query();
        }

        function deleteProduct(product) {
            product.$delete().then(function () {
                vm.products.splice(vm.products.indexOf(product), 1);
            });
        }

        function createProduct(product) {
            new vm.productsResource(product).$save().then(function (newProduct) {
                vm.products.push(newProduct)
                vm.editedProduct = null;
            });
        }

        function updateProduct(product) {
            product.$save();
            vm.editedProduct = null;
        }

        function startEdit(product) {
            vm.editedProduct = product;
        }

        function cancelEdit() {
            vm.editedProduct = null;
        }
    }
})();