app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/searchcomplaint", {
        templateUrl : "view/search_complaint.html",
        controller: "searchComplaintCtrl"
    }).when("/searchaverage",{
        templateUrl : "view/search_average_per_patient.html",
        controller: "searchAverangeCtrl"
    }).when("/register", {
        templateUrl: "",
        controller : "registerCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});