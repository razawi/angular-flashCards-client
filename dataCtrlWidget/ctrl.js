app.controller('dataWidgetCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.editClicked = function (type, id){
        debugger;
        alert("edit");
    }

   $scope.deleteClicked = function (type, id){
        debugger;
        if (type ==='curricula'){
            $http.delete(configData.url + '/curricula/' + id).success(function(response){
                debugger;
                alert("deleteD");
                // $loading.finish('curriculas');
            }); 
        }
    }

}]);
    