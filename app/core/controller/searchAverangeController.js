app.controller("searchAverangeCtrl", function ($scope, GeneralService) {
    var self = $scope;
    self.average = null;

    self.searchAveragePerPatient = function (id) {
        GeneralService.getAveragePerPatient(id).then(function successCallback(response){
            self.average = response.data.obj;
        },function errorCallback(error) {

        });
    }
});