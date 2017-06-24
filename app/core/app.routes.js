app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html",
        controller : "searchCtrl"
    }).when("/queixa/cadastro", {
        templateUrl: "view/cadastraQueixa.html",
        controller : "cadastraQueixaCtrl",
        controllerAs: "cadastraQueixaCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});