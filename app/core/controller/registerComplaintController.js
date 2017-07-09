app.controller("registerComplaintCtrl", function ($scope,$http) {
    $scope.registerComplaint = function (complaint) {
        $http.post("http://localhost:5000/SpringBootRestApi/api/queixa/", JSON.stringify(complaint))
            .then(function success(response){
                console.log("Queixa adicionada com sucesso!");
            }, function error(error){
                console.log(error);
                console.log("Problemas ao tentar adicionar queixa.");
            });            
    }
});