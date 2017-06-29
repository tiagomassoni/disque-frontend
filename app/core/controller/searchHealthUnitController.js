app.controller("searchHealthUnitCtrl", function (HealthUnitService) {

    var self = this;

    this.searchHU = function(neighborhood) {
        console.log("Busca por Bairro");
        console.log(neighborhood);
        HealthUnitService.getHealthUnitByNeighborhood(neighborhood)
            .then (function success(response){
                console.log("Sucesso")
                console.log(response);
            }, function error(error){
                console.log("Erro")
                console.log(error);
            });
    }
    
});