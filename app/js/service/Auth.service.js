'use strict';

(function () {
    var app = angular.module('vs');

    app.service('AuthService', function AuthService($http, $q, AppConfig) {

        var service = this;

        const ADMIN_LOGIN = "/admin/login";


        function _realizaLogin(formulario) {

          
             return $http.post(AppConfig.baseURL + ADMIN_LOGIN, JSON.stringify(formulario))

        }

        return {
            realizaLogin: _realizaLogin
        }

    });
})();