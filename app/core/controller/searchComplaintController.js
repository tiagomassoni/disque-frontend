app.controller("searchComplaintCtrl", function ($scope, ComplaintService, toastr) {
    var self = $scope;
    self.complaint;

    self.searchComplaint = function (id) {
        ComplaintService.getComplaintById(id).then(function successCallback(response){
            self.complaint = response.data;
        }, function errorCallback(error) {
            self.complaint = null;
            toastr.error(error.data.errorMessage, 'Error');
        });
    }
});