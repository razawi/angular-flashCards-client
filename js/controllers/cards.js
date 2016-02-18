'use strict';

angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {

        $http.get('http://127.0.0.1:8888/api/listallcards').success(function(response){
            $scope.cardslist = response;
            console.log("$scope.cardslist");


        })

        $scope.tree_data = [
            {Name:"USA",Area:9826675,Population:318212000,TimeZone:"UTC -5 to -10",
                children:[
                    {Name:"California", Area:423970,Population:38340000,TimeZone:"Pacific Time",
                        children:[
                            {Name:"San Francisco", Area:231,Population:837442,TimeZone:"PST"},
                            {Name:"Los Angeles", Area:503,Population:3904657,TimeZone:"PST"}
                        ]
                    },
                    {Name:"Illinois", Area:57914,Population:12882135,TimeZone:"Central Time Zone",
                        children:[
                            {Name:"Chicago", Area:234,Population:2695598,TimeZone:"CST"}
                        ]
                    }
                ]
            },
            {Name:"Texas",Area:268581,Population:26448193,TimeZone:"Mountain"}
        ];

    }]);
