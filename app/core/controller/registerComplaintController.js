app.controller("registerComplaintCtrl", function ($scope, ComplaintService, $window, toastr) {
    var self = this;

    self.responseComplaintId = "";

    self.registerComplaint = function (complaint) {
        ComplaintService.openComplaint(complaint)
            .then(function success(response){
                toastr.success("Queixa adicionada com sucesso!");
                self.responseComplaintId = response.data.id;
            }, function error(data, status, headers, config){
                console.log(data);
                toastr.error("Problemas ao tentar adicionar queixa.");
            });            
    }
});