'use strict';

(function() {
	var app = angular.module('vs');

	app.controller("searchAverangeCtrl", function ($scope, $http) {

	    $scope.average = null;

	    $scope.searchAveragePerPatient = function (id) {
	    	// TODO: colocar chamadas http em um service assincrono com $q.deffer
	        $http.get("http://localhost:5000/SpringBootRestApi/api/geral/medicos/" + id).then(function successCallback(response) {
	            $scope.average = response.data.obj;
	        }, function errorCallback(error) {
	        	// TODO: adicionar um showToast pra ficar bonitinho
	            console.log("Unidade Não Encontrada");
	        });
	    }
	});

})();