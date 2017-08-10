'user strict';
(function() {
	var app = angular.module('vs');

	app.controller("MainController", function MainController($scope, $state) {

    	$scope.goTo = function goTo(state) {
    		$state.go(state);
    	};
	});

})();
	