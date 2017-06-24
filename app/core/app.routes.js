app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/complaint/register", {
        templateUrl: "view/registerComplaint.html",
        controller : "registerComplaintCtrl",
        controllerAs: "registerComplaintCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});