app.controller('dataWidgetCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.editClicked = function (type, id){
        // debugger;
        alert("edit");
    }

   $scope.deleteClicked = function (id){
        type = $scope.type;
        if (type ==='curricula'){
            $http.delete(configData.url + '/curricula/' + id).success(function(response){
                // $loading.finish('curriculas');
            }); 
        } else if (type ==='category'){
            $http.delete(configData.url + '/category/' + id).success(function(response){
                // $loading.finish('curriculas');
            }); 
        } else if (type ==='card'){
            $http.delete(configData.url + '/card/' + id).success(function(response){

                // $loading.finish('curriculas');
            }); 
        } else if (type ==='face'){
            // change to edit card
            $http.delete(configData.url + '/card/' + id).success(function(response){
                // $loading.finish('curriculas');
            }); 
        }
    }

}]);
    