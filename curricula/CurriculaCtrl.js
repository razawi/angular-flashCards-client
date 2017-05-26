app.controller('CurriculaCtrl', ['$scope', '$http', function($scope, $http) {
   // show all categories

   // later - only per curricyula

   // link to category

   function catMapper(categ){
        dispData={};
        dispData = _.pick(categ, 'name', '_id', '');
        dispData.facess = _.map(categ.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    // catch querystring - get right domain 
    
   
    $scope.type = 'category';
    var curid = '';
    try{
        curid = window.location.href.split('?')[1].split('cur_id=')[1].split('&')[0];
    } catch(ex){}

    $scope.reflink = "category?cat_id";
    $scope.delLink = configData.url + '/api/category/';

    debugger;
    $http.get(configData.url + '/category/?cur_id=' + curid).success(function(response){
        $scope.categories = _.map(response, catMapper)
        debugger;

    });

}]);