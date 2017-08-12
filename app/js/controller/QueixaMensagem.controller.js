'use strict';
(function() {
    var app = angular.module('vs');

	app.controller("QueixaMensagemCtrl", function QueixaMensagemCtrl($state) {

		var queixaMensagemCtrl = this;
	    queixaMensagemCtrl.queixaId = $state.params.id;
	    
	});
})();