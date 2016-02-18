'use strict';
// openIssue: do I need _.js here ?

angular.module('flashCardsApp')
    .controller('cardlist', ['$scope', '$http', function($scope, $http) {

        $http.get('http://127.0.0.1:8888/api/listallcards').success(function(response) {
            var treeData = []; // curriculum / categorys / cards / facess

            // create card
            // better performance than Array.prototype.forEach()
            for (var i = 0, len = response.length; i < len; i++) {
                var dat = {
                    "text": response[i].facess[1].text,
                    "name": response[i].name,
                    "symbol": "card",
                    children: []
                };
                for (var j = 0, facelen = response[i].facess.length; j < facelen; j++) {
                    var face = {
                        "text": response[i].facess[j].text,
                        "name": response[i].facess[j].symbol,
                        "symbol": "face",
                    }
                    dat.children.push(face);
                }

                var curloc = findWithAttr(treeData, "text", response[i].subcategory[0].curricula[0].name);

                var curdat = {};
                if (curloc === -1) {
                  curdat = {
                    "text" : response[i].subcategory[0].curricula[0].name,
                    "name" : response[i].subcategory[0].curricula[0].name + ' : curriculum',
                    "symbol" : "curriculum",
                    children :[]
                  }

                  treeData.push(curdat);
                }
                else {
                    curdat = treeData[curloc];
                }

                var catloc = findWithAttr(curdat.children, "text", response[i].subcategory[0].symbol)

                var catdat = {};
                if (catloc === -1){ // convert to try catch
                  catdat = {
                    "text" : response[i].subcategory[0].symbol,
                    "name" : response[i].subcategory[0].symbol + ' : ' + response[i].subcategory[0].curricula[0].name,
                    "symbol"   : "categery",
                    "children" : []
                  }
                  curdat.children.push(catdat)
                }
                else {
                    catdat = curdat.children[catloc];
                }
                catdat.children.push(dat);
              }
            debugger;
            $scope.tree_data = treeData;
        })

        // Initialize tree fields
        $scope.tree_data =[{"text":"", "name":"", "symbol" : ""}];

        function findWithAttr (array, attr, value) {
            for(var i = 0; i < array.length; i += 1) {
                if(array[i][attr] === value) {
                    return i;
                }
            }
            return -1;
        }

    }]);
