// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = angular.module("app", ["winjs"]);

    app.controller("appCtrl", function ($scope, $sce, $location) {
        $scope.toggleState;
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
                //$scope.footballerImage = $sce.trustAsResourceUrl($scope.footballerSelected.photo);
            }
        }

        $scope.strongestFootballersEver =  [
            { name: 'Roberto BAGGIO', photo: 'img/bs-baggio.jpg' },
            { name: 'Pep GUARDIOLA', photo: 'img/bs-guardiola.jpg' },
            { name: 'Gheorghe HAGI', photo: 'img/bs-hagi.jpg' },
            { name: 'Dario HUBNER', photo: 'img/bs-hubner.jpg' }
        ];
    })
})();
