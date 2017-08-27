'use strict';

(function () {
    var app = angular.module('vs');

    app.service('AuthService', function AuthService($http, $q, AppConfig, $state) {

        var service = this;

        const ADMIN_LOGIN = "/admin/login";

        service._user;


        function _realizaLogin(formulario) {

            let deffered = $q.defer();

            $http.post(AppConfig.baseURL + ADMIN_LOGIN, JSON.stringify(formulario)).then(
                function success(response) {
                    service._user = new Admin(response.data);
                    service.saveInternalAdmin(service._user);
                    deffered.resolve(service._user);
                }, function error(data) {
                    deffered.reject(data);
                });

            return deffered.promise;
        }

       service.saveInternalAdmin = function(admin) {
            return localStorage.setItem("ADMIN_LOGGED", JSON.stringify(admin));
        }


        function _getAdmin() {
            return service._user;
        }

        function _logout(){
            localStorage.clear(); 
            $state.go("vs.home");

        }

        return {
            realizaLogin: _realizaLogin,
            getAdmin: _getAdmin, 
            logout: _logout
        }

    });
})();