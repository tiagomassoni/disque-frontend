app.controller("registerComplaintCtrl", function (ComplaintService, $window) {
    var self = this;

    self.registerComplaint = function (complaint) {
        ComplaintService.openComplaint(complaint)
            .then(function success(response){
                $window.alert("Queixa adicionada com sucesso! " 
                + "Você pode acompanhar a queixa com esse código: " + response.data.id);
            }, function error(data, status, headers, config){
                console.log(data);
                $window.alert("Problemas ao tentar adicionar queixa.");
            });            
    }
});