'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("PesquisaUnidadeSaudeCtrl", function PesquisaUnidadeSaudeCtrl(toastr, UnidadeSaudeService) {

        var pesquisaUnidadeSaudeCtrl = this;
        pesquisaUnidadeSaudeCtrl.unidades = [];

        pesquisaUnidadeSaudeCtrl.pesquisaUnidadeSaude = function pesquisaUnidadeSaude(bairro) {
            UnidadeSaudeService.pesquisaUnidadeSaude(bairro)
                .then(function success(response) {
                    pesquisaUnidadeSaudeCtrl.unidades = [];
                    pesquisaUnidadeSaudeCtrl.unidades.push(response.data);
                }, function error() {
                    toastr.error("Erro na busca de unidades");
                });
        }
    });
})();