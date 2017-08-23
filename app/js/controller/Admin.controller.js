'user strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdminController", function AdminController($state) {

		var adminCtrl = this;

    	adminCtrl.goTo = function goTo(state) {
    		$state.go(state);
    	};
	});
})();
	