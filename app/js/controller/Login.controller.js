'user strict';
(function () {
    var app = angular.module('vs');

    app.controller("LoginController", function LoginController($state, AuthService, toastr) {

        var loginCtrl = this;

        loginCtrl.formulario = {};

        loginCtrl.login = function () {
          
            return AuthService.realizaLogin(loginCtrl.formulario).then(
                function success(response) {
                    console.log(response)
                    
                    loginCtrl.formulario = {};
                    $state.go("vs.home")
                    bg.destroy();
                }, function error(error) {
                    console.log(error);
                    toastr.error("Nao deu");

                }
            )

        }


        let bg = $.backstretch("img/login-bg.jpg", { speed: 250 });


    });
})();
