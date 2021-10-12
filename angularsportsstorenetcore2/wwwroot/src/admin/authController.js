(function () {
    'use strict';

    angular
        .module('admin')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$http', '$location'];

    /* @ngInject */
    function AuthController($http, $location) {
        /*jshint validthis: true */
        var vm = this;
        vm.authenticate = authenticate;
        vm.authenticationError = null;


        function authenticate(user, pass) {
            $http({
                method: 'post',
                url: './api/login',
                data: { username: user, password: pass },
                config: { withCredentials: true }
            }).then(function (response) {
                $location.path("/main");
            }).catch(function (e) {
                vm.authenticationError = e;
            })
        }

    }
})();