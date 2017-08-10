'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("searchHealthUnitCtrl", function searchHealthUnitCtrl($scope, $http) {

        $scope.units = [];

        $scope.searchHU = function searchHU(neighborhood) {
            // TODO: colocar chamadas http em um service assincrono com $q.deffer
            $http.get("http://localhost:5000/SpringBootRestApi/api/unidade/busca?bairro=" + neighborhood)
                .then(function success(response) {
                    $scope.units = [];
                    $scope.units.push(response.data);
                    // TODO: fazer um showdialog ou showtoast pra mostrar bonitinho a mensagem
                    console.log("Foram encontradas Unidades de saúde");
                    console.log(response.data);
                }, function failed(error) {
                    console.log("Erro na busca de unidades");
                    console.log(error.data.errorMessage);
                });
        }
    });
})();