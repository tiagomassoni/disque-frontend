'use strict';

(function() {
	var app = angular.module('vs');

	app.service('QueixaService', function QueixaService($http, $q) {

		var service = this;

		var QUEIXA_URI = "http://localhost:5000/SpringBootRestApi/api/queixa/";

		service.getQueixa = function getQueixa(id) {
			var deffered = $q.defer();
			$http.get(QUEIXA_URI + id).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};

		service.registraQueixa = function registraQueixa(queixa) {
			var deffered = $q.defer();
			$http.post(QUEIXA_URI, JSON.stringify(queixa)).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};
	});
})();