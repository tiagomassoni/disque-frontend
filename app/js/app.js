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
                    controller: "MainController"
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
        .state("vs.searchHealthUnit", {
            url: "/searchHealthUnit",
            views: {
              content: {
                templateUrl: 'view/searchHealthUnit.html',
                controller: "searchHealthUnitCtrl"
              }
            }
        })
        .state("vs.searchComplaint", {
            url: "/searchComplaint",
            views: {
              content: {
                templateUrl: 'view/search_complaint.html',
                controller: "searchComplaintCtrl"
              }
            }
        })
        .state("vs.searchAverage", {
            url: "/searchAverage",
            views: {
              content: {
                templateUrl: 'view/search_average_per_patient.html',
                controller: "searchAverangeCtrl"
              }
            }
        })
        .state("vs.generalSituationComplaints", {
            url: "/generalSituationComplaints",
            views: {
              content: {
                templateUrl: 'view/generalSituationComplaints.html',
                controller: "generalSituationComplaintsCtrl"
              }
            }
        })
        .state("vs.registerComplaint", {
            url: "/registerComplaint",
            views: {
              content: {
                templateUrl: 'view/registerComplaint.html',
                controller: "registerComplaintCtrl"
              }
            }
        })
        .state("vs.successPage", {
            url: "/succesPage/:id",
            views: {
                content: {
                    templateUrl: 'view/successPage.html',
                    controller: "messageCreatedComplaintCtrl"
                }
            }
        });
 
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(false);

        });
})();