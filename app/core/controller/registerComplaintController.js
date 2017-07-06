app.controller("registerComplaintCtrl", function ($scope, ComplaintService, $window, toastr) {
    var self = $scope;

    self.responseComplaintId = "";

    self.registerComplaint = function (complaint) {
        ComplaintService.openComplaint(complaint)
            .then(function success(response){
                toastr.success("Queixa adicionada com sucesso!");
                self.responseComplaintId = response.data.id;
            }, function error(error){
                console.log(error);
                toastr.error("Problemas ao tentar adicionar queixa.");
            });            
    }
});