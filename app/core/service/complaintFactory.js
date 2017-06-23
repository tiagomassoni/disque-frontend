app.factory("ComplaintService", function ($http, AppConfig) {
    function _getAllComplaint() {
        return $http.get(AppConfig.baseUrl + "queixa/");
    }

    function _getComplaintById(id) {
        return $http.get(AppConfig.baseUrl + "queixa/" + id);
    }
    
    function _openComplaint(complaint) {
        return $http.post(AppConfig.baseUrl + "queixa/", angular.toJson(complaint));
    }

    function _updateComplaint(id, complaint) {
        return $http.put(AppConfig.baseUrl + "queixa/" + id, angular.toJson(complaint));
    }

    function _closeComplaint(complaint) {
        return $http.post(AppConfig.baseUrl + "queixa/fechamento", angular.toJson(complaint));
    }

    function _deleteComplaintById(id) {
        return $http.delete(AppConfig.baseUrl + "queixa/" + id);
    }
    
    return {
        getAllComplaint : _getAllComplaint,
        getComplaintById : _getComplaintById,
        openComplaint : _openComplaint,
        updateComplaint : _updateComplaint,
        closeComplaint : _closeComplaint,
        deleteComplaintById : _deleteComplaintById
    }
});