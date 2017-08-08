const app = angular.module("vs", ["ngRoute", "ngMessages", "ngAnimate", "toastr"]);

app.config(['$locationProvider', '$routeProvider', '$httpProvider',
    function ($locationProvider, $routeProvider, $httpProvider) {

        //routes
        $routeProvider.when("/", {
            templateUrl: "view/search.html"
        }).when("/complaint/register", {
            templateUrl: "view/registerComplaint.html",
            controller: "registerComplaintCtrl",
        }).when("/searchcomplaint", {
            templateUrl: "view/search_complaint.html",
            controller: "searchComplaintCtrl"
        }).when("/search_health_unit", {
            templateUrl: "view/searchHealthUnit.html",
            controller: "searchHealthUnitCtrl",
        }).when("/searchaverage", {
            templateUrl: "view/search_average_per_patient.html",
            controller: "searchAverangeCtrl"
        }).when("/createdcomplaint/:id", {
            templateUrl: "view/successPage.html",
            controller: "messageCreatedComplaintCtrl"
        }).when("/generalSituationComplaints", {
            templateUrl: "view/generalSituationComplaints.html",
            controller: "generalSituationComplaintsCtrl"
        }).otherwise({
            redirectTo: '/'
        });





    }]);
