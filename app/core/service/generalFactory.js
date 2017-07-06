app.factory("GeneralService", function ($http, AppConfig) {
    function _getAveragePerPatient(id) {
        return $http.get(AppConfig.baseUrl + "geral/medicos/" + id);
    }

    function _getSituation() {
        return $http.get(AppConfig.baseUrl + "geral/situacao");
    }
    
    return {
        getAveragePerPatient : _getAveragePerPatient,
        getSituation : _getSituation
    }
});