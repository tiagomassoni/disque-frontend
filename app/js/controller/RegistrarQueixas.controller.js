'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("registerComplaintCtrl", function registerComplaintCtrl($scope, $http, toastr, $state) {

        $scope.registerComplaint = function (complaint) {
            $http.post("http://localhost:5000/SpringBootRestApi/api/queixa/", JSON.stringify(complaint))
                .then(function success(response) {
                    toastr.success("Queixa adicionada com sucesso!");
                    $state.go('vs.successPage', {id: response.data.id});
                }, function error(error) {
                    console.log(error);
                    console.log("Problemas ao tentar adicionar queixa.");
                });
        }
    });
})();