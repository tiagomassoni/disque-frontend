'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("RegistraQueixaCtrl", function RegistraQueixaCtrl(toastr, $state, QueixaService) {

        var registraQueixaCtrl = this;

        registraQueixaCtrl.registraQueixa = function registraQueixa(queixa) {
            QueixaService.registraQueixa(queixa)
                .then(function success(response) {
                    toastr.success("Queixa adicionada com sucesso!");
                    $state.go('vs.sucesso', {id: response.data.id});
                }, function error() {
                    toastr.error("Problemas ao tentar adicionar queixa.");
                });
        }
    });
})();