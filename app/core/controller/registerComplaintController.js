app.controller("registerComplaintCtrl", function ($scope,$http) {

    $scope.responseComplaintId = "";

    $scope.registerComplaint = function (complaint) {
        $http.post("http://localhost:5000/SpringBootRestApi/api/queixa/", JSON.stringify(complaint))
            .then(function success(response){
                console.log("Queixa adicionada com sucesso!");
                self.responseComplaintId = response.data.id;
            }, function error(error){
                console.log(error);
                toastr.error("Problemas ao tentar adicionar queixa.");
            });            
    }
});