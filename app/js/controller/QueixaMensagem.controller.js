'use strict';
(function() {
    var app = angular.module('vs');

	app.controller("messageCreatedComplaintCtrl", function messageCreatedComplaintCtrl($scope, $state) {

	    $scope.responseComplaintId = "";

	    var showMessage = function () {
	        $scope.responseComplaintId = $state.params.id;
	    }
	    showMessage();
	});
})();