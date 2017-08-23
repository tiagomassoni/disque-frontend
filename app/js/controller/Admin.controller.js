'user strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdminController", function AdminController($state, AuthService) {

		var adminCtrl = this;

		adminCtrl.logout = function() {
			console.log("LOGOUT");
			AuthService.logout(); 
		}
		
    	adminCtrl.goTo = function goTo(state) {
    		$state.go(state);
    	};
	});
})();
	