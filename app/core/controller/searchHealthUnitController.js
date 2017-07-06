app.controller("searchHealthUnitCtrl", function ($scope, HealthUnitService, toastr) {

    var self = $scope;

    self.units = [];

    this.searchHU = function (neighborhood) {
        HealthUnitService.getHealthUnitByNeighborhood(neighborhood)
            .then(function success(response) {
                self.units = [];
                self.units.push(response.data);
                toastr.success("Foram encontradas Unidades de saúde");
            }, function failed(error) {
                if(error.data.status == 500) {
                    toastr.error("Nenhuma unidade foi encontrada", "Erro");
                } else {
                    toastr.error("Erro ao tentar se conectar com o servidor", "Erro");
                }
            });
    }
});