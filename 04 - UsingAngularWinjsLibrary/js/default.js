// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = angular.module("app", ["winjs"]);

    app.controller("appCtrl", function ($scope, $sce, $location) {
        $scope.toggleState = false;
        $scope.footballersSelected = [];

        $scope.SetHorizontal = function () {
            $scope.toggleState = false;
        }

        $scope.SetVertical = function () {
            $scope.toggleState = true;
        }

        $scope.oniteminvoked = function (e) {
            if ($scope.footballersSelected.length > 0) {
                $scope.footballerSelected = $scope.strongestFootballersEver[$scope.footballersSelected[0]];
                $scope.footballerImage = $scope.footballerSelected.photo;
                //$scope.footballerImage = $sce.trustAsResourceUrl($scope.footballerSelected.photo);
            }
        }

        $scope.strongestFootballersEver =  [
            { name: 'Roberto BAGGIO', photo: 'https://raw.github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/master/04%20-%20UsingAngularWinjsLibrary/img/bs-baggio.jpg?raw=true' }, //'img/bs-baggio.jpg' },
            { name: 'Pep GUARDIOLA', photo: 'https://github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/blob/master/04%20-%20UsingAngularWinjsLibrary/img/bs-guardiola.jpg?raw=true' }, //'img/bs-guardiola.jpg' },
            { name: 'Gheroghe HAGI', photo: 'https://raw.github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/master/04%20-%20UsingAngularWinjsLibrary/img/bs-hagi.jpg'}, // 'img/bs-hagi.jpg' },
            { name: 'Dario HUBNER', photo: 'https://raw.github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/master/04%20-%20UsingAngularWinjsLibrary/img/bs-hubner.jpg'} // 'img/bs-hubner.jpg' }
        ];
    })
})();