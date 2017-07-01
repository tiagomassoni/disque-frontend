app.controller("searchHealthUnitCtrl", function (HealthUnitService) {

    var self = this;

    self.units = [];

    this.searchHU = function (neighborhood) {
        HealthUnitService.getHealthUnitByNeighborhood(neighborhood)
            .then(function success(response) {
                self.units = [];
                self.units.push(response.data);
            }, function error(error) {
                console.log("Erro");
                console.log(error);
            });
    }
});