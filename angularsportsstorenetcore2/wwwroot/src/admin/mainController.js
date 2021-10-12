(function () {
    'use strict';

    angular
        .module('admin')
        .controller('MainController', MainController);


    /* @ngInject */
    function MainController() {
        /*jshint validthis: true */
        var vm = this;
        vm.screens = ['Products','Orders']
        vm.current = vm.screens[0];
        vm.setScreen = setScreen;
        vm.getScreen = getScreen;

        function setScreen(index) {
            vm.current = vm.screens[index];
        }

        function getScreen() {
            var result = vm.current == 'Products' ? './src/sportsStore/views/adminProducts.html' : './src/sportsStore/views/adminOrders.html';
            return result;
        }

    }
})();