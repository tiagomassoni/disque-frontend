app.factory("HealthUnitService", function ($http, AppConfig) {
    

    function _getHealthUnitByNeighborhood(neighborhood) {
        return $http.get(AppConfig.baseUrl + "unidade/busca?bairro=" + neighborhood);
    }
    
    return {
        getHealthUnitByNeighborhood : _getHealthUnitByNeighborhood
    }
});