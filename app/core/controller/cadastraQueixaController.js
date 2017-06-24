app.controller("cadastraQueixaCtrl", function (ComplaintService, $window) {
    var self = this;

    self.adicionarQueixa = function (queixa) {
        ComplaintService.openComplaint(queixa)
            .then(function success(response){
                $window.alert("Queixa adicionada com sucesso! " 
                + "Você pode acompanhar a queixa com esse código: " + response.data.id);
            }, function error(error){
                console.log(error);
                $window.alert("Problemas ao tentar adicionar queixa.");
            });
    }
});