app.controller("registerComplaintCtrl", function ($scope,$http) {
    $scope.registerComplaint = function (complaint) {
        $http.post("http://localhost:5000/SpringBootRestApi/api/queixa/", JSON.stringify(complaint))
            .then(function success(response){
                console.log("Queixa adicionada com sucesso! ID: " + response.data.id);
            }, function error(error){
                console.log(error);
                console.log("Problemas ao tentar adicionar queixa.");
            });
    }
});

app.controller("searchAverangeCtrl", function ($scope, $http) {

    $scope.average = null;

    $scope.searchAveragePerPatient = function (id) {
        $http.get("http://localhost:5000/SpringBootRestApi/api/geral/medicos/" + id).then(function successCallback(response){
            $scope.average = response.data.obj;
        },function errorCallback(error) {
            console.log("Unidade Não Encontrada");
        });
    }
});

app.controller("searchComplaintCtrl", function ($scope, $http) {
    $scope.complaint;

    $scope.searchComplaint = function (id) {
        $http.get("http://localhost:5000/SpringBootRestApi/api/queixa/" + id).then(function successCallback(response){
            $scope.complaint = response.data;
        }, function errorCallback(error) {
            $scope.complaint = null;
            console.log(error);
        });
    }
});

app.controller("searchHealthUnitCtrl", function ($scope, $http) {

    $scope.units = [];

    $scope.searchHU = function (neighborhood) {
        $http.get("http://localhost:5000/SpringBootRestApi/api/unidade/busca?bairro=" + neighborhood)
            .then(function success(response) {
                $scope.units = [];
                $scope.units.push(response.data);
                console.log("Foram encontradas Unidades de saúde");
                console.log(response.data);
            }, function failed(error) {
                if(error.data.status == 500) {
                    console.log("Nenhuma unidade foi encontrada", "Erro");
                } else {
                    console.log("Erro ao tentar se conectar com o servidor", "Erro");
                }
            });
    }
});
