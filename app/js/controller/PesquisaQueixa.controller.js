'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("PesquisaQueixaCtrl", function PesquisaQueixaCtrl(toastr, QueixaService) {

		var pesquisaQueixaCtrl = this;
	    pesquisaQueixaCtrl.queixa;

	    pesquisaQueixaCtrl.getQueixa = function getQueixa(id) {
	        QueixaService.getQueixa(id)
	        .then(function success(response) {
	            pesquisaQueixaCtrl.queixa = response.data;
	        }, function error() {
	            pesquisaQueixaCtrl.queixa = null;
	            toastr.error(error);
	        });
	    }
	});
})();