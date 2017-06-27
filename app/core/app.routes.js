app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/searchcomplaint", {
        templateUrl : "view/search_complaint.html",
        controller: "searchComplaintCtrl"
    }).when("/register", {
        templateUrl: "",
        controller : "registerCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});