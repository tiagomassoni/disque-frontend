app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/register", {
        templateUrl: "view/register.html",
        controller : "registerCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});