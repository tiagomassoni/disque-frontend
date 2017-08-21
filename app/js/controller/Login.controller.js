'user strict';
(function () {
    var app = angular.module('vs');

    app.controller("LoginController", function LoginController($state) {

        var loginCtrl = this;

        loginCtrl.login = function () {
            console.log("ENTROU");
            $state.go("vs.home")
            bg.destroy();
        }


      let bg =  $.backstretch("img/login-bg.jpg", { speed: 500 });


    });
})();
