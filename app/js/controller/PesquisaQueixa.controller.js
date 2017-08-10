'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("searchComplaintCtrl", function ($scope, $http) {

	    $scope.complaint;

	    $scope.searchComplaint = function (id) {
	    	// TODO: colocar chamadas http em um service assincrono com $q.deffer
	        $http.get("http://localhost:5000/SpringBootRestApi/api/queixa/" + id).then(function successCallback(response) {
	            $scope.complaint = response.data;
	        }, function errorCallback(error) {
	            $scope.complaint = null;
	            console.log(error);
	        });
	    }
	});
})();