app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/register", {
        templateUrl: "view/register.html",
        controller : "registerCtrl"
    }).when("/search_health_unit", {
        templateUrl: "view/searchHealthUnit.html",
        controller : "searchHealthUnitCtrl",
        controllerAs: "searchHUCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});