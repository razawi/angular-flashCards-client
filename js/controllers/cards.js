'use strict';
// openIssue: do I need _.js here ?

angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {
// http://127.0.0.1:8888/api/cards/category/56c0f292cb6c22504acc10f1
        $http.get('http://127.0.0.1:8888/api/listallcards').success(function(response) {
            var treeData = []; // curriculum / categorys / cards / facess

            // better performance than Array.prototype.forEach()
            // create card
            for (var i = 0, len = response.length; i < len; i++) {
                var dat = {
                    "text" : response[i].facess[1].text,
                    "name" : response[i].name,
                    "symbol" : "card",
                    children : []
                };
                for (var j =0, facelen = response[i].facess.length; j < facelen; j++){
                    var face = {
                        "text"   : response[i].facess[j].text,
                        "name"   : response[i].facess[j].symbol,
                        "symbol" : "face",
                    }
                    dat.children.push(face);
                }

                debugger;

                // if create categery
                //    "text" : response[i].facess[1].text,
                //    "name" : response[i].name,
                //    "symbol" : "categery",
                //    children : []

                // if create curriculum
                //    "text" : response[i].facess[1].text,
                //    "name" : response[i].name,
                //    "symbol" : "curriculum",
                //    children : []

                // find or create curicula and category


                treeData.push(dat);
            }

            var stubObject = [{"text":"food", "name":"name", "symbol" : "category", "children":[
                    {"text" : "אגס", "name":"אגס", "symbol" : "card","children":[
                        {"text": "injas", "name":"eng", "symbol":"face"},
                        {"text": "אִנְגַ'אס'", "name":"arb", "symbol":"face" },
                        {"text": "אגס", "name":"heb", "symbol":"face"}]},
                    {"text": "אוכל", "name":"אוכל", "symbol" : "card", "children":[
                        {"text":"A-kel", "name":"eng", "symbol":"face", "children":[{"text": "test", "name":"test","symbol":"test"} ]},
                        {"text": "אכל", "name":"arb","symbol":"face"},
                        {"text": "אוכל", "name":"heb","symbol":"face"}]}]}];

            $scope.tree_data = treeData;
        })

        $scope.tree_data =[{"text":"", "name":"", "symbol" : ""}];

        }]);

//debugger;
//$scope.tree_data = JSON.stringify(tree_data);
