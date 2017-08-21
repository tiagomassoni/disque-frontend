'use strict';

(function() {
    var app = angular.module("vs", [
        "ui.router",
        "ngMessages",
        "ngAnimate",
        "toastr"
        ]);

    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
        .state("vs", {
            abstract: true,
            views: {
                main: {
                    templateUrl: "view/main.html",
                    controller: "MainController as mainCtrl"
                }
            }
        })
        .state("vs.home", {
            url: "/",
            views: {
              content: {
                templateUrl: 'view/home.html',
              }
            }
        })
        .state("vs.pesquisaUnidadeSaude", {
            url: "/pesquisaUnidadeSaude",
            views: {
              content: {
                templateUrl: 'view/pesquisaUnidadeSaude.html',
                controller: "PesquisaUnidadeSaudeCtrl as pesquisaUnidadeSaudeCtrl"
              }
            }
        })
        .state("vs.pesquisaQueixa", {
            url: "/pesquisaQueixa",
            views: {
              content: {
                templateUrl: 'view/pesquisaQueixa.html',
                controller: "PesquisaQueixaCtrl as pesquisaQueixaCtrl"
              }
            }
        })
        .state("vs.pesquisaMediaMedico", {
            url: "/pesquisaMediaMedico",
            views: {
              content: {
                templateUrl: 'view/pesquisaMediaMedico.html',
                controller: "PesquisaMediaMedicoCtrl as pesquisaMediaMedicoCtrl"
              }
            }
        })
        .state("vs.situacaoQueixas", {
            url: "/situacaoQueixas",
            views: {
              content: {
                templateUrl: 'view/situacaoQueixas.html',
                controller: "SituacaoQueixasCtrl as situacaoQueixasCtrl"
              }
            }
        })
        .state("vs.registraQueixa", {
            url: "/registraQueixa",
            views: {
              content: {
                templateUrl: 'view/registraQueixa.html',
                controller: "RegistraQueixaCtrl as registraQueixaCtrl"
              }
            }
        })

        .state("login", {
            url: '/login', 
            views: {
                main: {
                    templateUrl: 'view/login.html',
                    controller: 'LoginController as loginCtrl'
                }
            }
        })

        .state("vs.sucesso", {
            url: "/sucesso/:id",
            views: {
                content: {
                    templateUrl: 'view/sucesso.html',
                    controller: "QueixaMensagemCtrl as queixaMensagemCtrl"
                }
            }
        });
 
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(false);

        });
})();