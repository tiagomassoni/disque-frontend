'user strict';
(function () {
    var app = angular.module('vs');

    app.controller("LoginController", function LoginController($state, AuthService, toastr) {

        var loginCtrl = this;

        loginCtrl.formulario = {};

        loginCtrl.login = function () {


            return AuthService.realizaLogin(loginCtrl.formulario).then(
                function success(response) {
                    loginCtrl.formulario = {};
                    console.log(AuthService.getAdmin());
                    bg.destroy();
                    $state.go("admin.home")


                }, function error(error) {
                    console.log(error);
                    toastr.error("Nao deu");
                    loginCtrl.formulario = {};

                }
            )

        }

        let bg = $.backstretch("img/login-bg.jpg", { speed: 250 });


    });
})();
