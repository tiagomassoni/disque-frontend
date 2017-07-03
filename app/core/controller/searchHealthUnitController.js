app.controller("searchHealthUnitCtrl", function (HealthUnitService) {

    var self = this;

    self.units = [];

    this.searchHU = function (neighborhood) {
        HealthUnitService.getHealthUnitByNeighborhood(neighborhood)
            .then(function success(response) {
                self.units = [];
                self.units.push(response.data);
            }, function failed(error) {
                if(error.data.status == 500) {
                    console.log("Nenhuma unidade foi encontrada");
                } else {
                    console.log("Erro ao tentar se conectar com o servidor");
                }
            });
    }
});