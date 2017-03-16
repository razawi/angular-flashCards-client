app.controller('CurriculumCtrl', ['$scope', '$http',  function($scope, $http) {
   function mapper(card){
        dispData={};
        dispData = _.pick(card, 'name', '', '');
        dispData.facess = _.map(card.facess, function (face){
            return _.pick(face, 'symbol', 'text');
        });

        return dispData;
    }

    var apiUrl = 'https://better-flash-cards-api.herokuapp.com/api/'; //todo main configuration file

    $http.get(apiUrl + 'curriculaList').success(function(response){
         $scope.curics = _.map(response, mapper)
          debugger;
    });

// $scope.treeOptions = {
//     nodeChildren: "children",
//     dirSelectable: true,
//     injectClasses: {
//         ul: "a1",
//         li: "a2",
//         liSelected: "a7",
//         iExpanded: "a3",
//         iCollapsed: "a4",
//         iLeaf: "a5",
//         label: "a6",
//         labelSelected: "a8"
//     }
// }
// $scope.dataForTheTree =
// [
//     { "name" : "Joe", "age" : "21", "children" : [
//         { "name" : "Smith", "age" : "42", "children" : [] },
//         { "name" : "Gary", "age" : "21", "children" : [
//             { "name" : "Jenifer", "age" : "23", "children" : [
//                 { "name" : "Dani", "age" : "32", "children" : [] },
//                 { "name" : "Max", "age" : "34", "children" : [] }
//             ]}
//         ]}
//     ]},
//     { "name" : "Albert", "age" : "33", "children" : [] },
//     { "name" : "Ron", "age" : "29", "children" : [] }
// ];


//    $.each( displayData[0].facess, function( key, val ) {
//         titles += ' <th> ' + val.symbol + ' </th> '
//    });

//    $.each( displayData, function( key, card ) { 
//        lines += '<tr> <td> ' + card.name + '</td>';
//        $.each( card.facess, function( num, face ) { 
//             lines += '<td> ' + face.text + '</td>'; 
//        });
//        lines+="</tr>";
//    });

//    var table = headTempl + titles + seperator + lines + footer;
//    $( "<table/>", {
//        id : "curiculaTable",
//        class: "table table-striped",
//        html: table
//    }).appendTo( "body" );

}]);