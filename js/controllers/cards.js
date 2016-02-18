'use strict';

angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {

        $http.get('http://127.0.0.1:8888/api/cards/category/56c0f292cb6c22504acc10f1').success(function(response){
            $scope.cardslist = response;
            console.log("$scope.tree_data");


            var chiled = [ {
                Name : response[1].name,
                children:[{
                    symbol : response[1].facess[0].symbol,
                    text : response[1].facess[0].text
                    },{
                    symbol : response[1].facess[1].symbol,
                    text : response[1].facess[1].text
                },{
                    symbol : response[1].facess[2].symbol,
                    text : response[1].facess[2].text
                }]
            },{
                Name : response[5].name,
                children:[{
                    symbol : response[5].facess[0].symbol,
                    text : response[5].facess[0].text
                },{
                    symbol : response[5].facess[1].symbol,
                    text : response[5].facess[1].text
                },{
                    symbol : response[5].facess[2].symbol,
                    text : response[5].facess[2].text
                }]
            }];

            var tree_data = [{
                category : "food",
                Name : "name",
                children : chiled
            }];

            debugger;
            $scope.__tree_data = JSON.stringify(tree_data);

            
        })

        $scope.tree_data = [{"text":"food", "name":"name", "symbol" : "category", "children":[
            {"text" : "אגס", "name":"אגס", "symbol" : "card","children":[
                {"text": "injas", "name":"eng", "symbol":"face"},
                {"text": "אִנְגַ'אס'", "name":"arb", "symbol":"face" },
                {"text": "אגס", "name":"heb", "symbol":"face"}]},
            {"text": "אוכל", "name":"אוכל", "symbol" : "card", "children":[{"symbol":"eng","text":"A-kel"},
                {"text": "אכל", "name":"arb","symbol":"face"},
                {"text": "אוכל", "name":"heb","symbol":"face"}]}]}]

        }]);

//for (var i = 0, len = response.length; i < len; i++) {
//    var dat = {
//        category : response[i].subcategory[0].symbol,
//        name : response[i].name,
//    };
//
//    for (var j =0,facelen = facess.length; h < facelen; h++){
//        response[i].facess[0].symbol,
//            response[i].facess[0].text,
//    }
//
//    tree_data[i] = dat;
//};
