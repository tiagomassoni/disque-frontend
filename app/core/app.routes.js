app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/complaint/register", {
        templateUrl: "view/registerComplaint.html",
        controller : "registerComplaintCtrl",
    }).when("/searchcomplaint", {
        templateUrl : "view/search_complaint.html",
        controller: "searchComplaintCtrl"
    }).when("/search_health_unit", {
        templateUrl: "view/searchHealthUnit.html",
        controller : "searchHealthUnitCtrl",
        controllerAs: "searchHealthUnitCtrl"
    }).when("/searchaverage",{
        templateUrl : "view/search_average_per_patient.html",
        controller: "searchAverangeCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});