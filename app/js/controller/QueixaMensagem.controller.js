app.controller("messageCreatedComplaintCtrl", function ($scope, $state) {
    $scope.responseComplaintId = "";
    var showMessage = function () {
        $scope.responseComplaintId = $state.params.id;
    }

    showMessage();
});
