// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = angular.module("app", ["winjs"]);

    //app.config(['$compileProvider', function($compileProvider) {
    //    var oldWhiteList = $compileProvider.imgSrcSanitizationWhitelist();
    //    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:ms-appx:\/\/\/images\img\//);
    //}]);

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
            // THESE TWO LINES GET THE CURRENT APPLICATION FOLDER
            //var pkg = Windows.ApplicationModel.Package.current;
            //var installedLocation = pkg.installedLocation;
            
            
            // FOR LOCAL IMAGE PATH: SOLUTION 1
            //if ($scope.footballersSelected.length > 0) {
            //    $scope.footballerSelected = $scope.strongestFootballersEver[$scope.footballersSelected[0]];
            //    var uri = new Windows.Foundation.Uri('ms-appx:///' + $scope.footballerSelected.photo); // NON VA!
            //    //var uri = new Windows.Foundation.Uri(installedLocation.path + '/images/img/bs-guardiola.jpg'); // NON VA!
            //    //var uri = new Windows.Foundation.Uri('/images/img/bs-guardiola.jpg'); // NON VA!
            //    var file = Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(function (file) {
            //        //$scope.footballerImage = $sce.trustAsResourceUrl(file.path); // IT DOES NOT WORK!
            //        //$scope.footballerImage = $sce.trustAsUrl(file.path); // IT DOES NOT WORK!
            //        //$scope.footballerImage = file.path; // IT DOES NOT WORK!
            //        $scope.footballerImage = file.path;
            //    });
            //}

            // FOR LOCAL IMAGE PATH: SOLUTION 2
            //if ($scope.footballersSelected.length > 0) {
            //    var base_url = location.protocol + "//" + location.hostname + location.pathname;
            //    $scope.footballerImage = base_url + '/' + $scope.footballerSelected.photo;
            //}

            // FOR REMOTE IMAGE URLS
            if ($scope.footballersSelected.length > 0) {
                $scope.footballerSelected = $scope.strongestFootballersEver[$scope.footballersSelected[0]];
                $scope.footballerImage = $scope.footballerSelected.photo; // IT DOES NOT WORK!
            }
        }

        // THIS OBJECT MODEL WORKS!
        $scope.strongestFootballersEver =  [
            { name: 'Roberto BAGGIO', photo: 'https://raw.github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/master/04%20-%20UsingAngularWinjsLibrary/img/bs-baggio.jpg?raw=true' }, //'img/bs-baggio.jpg' },
            { name: 'Pep GUARDIOLA', photo: 'https://github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/blob/master/04%20-%20UsingAngularWinjsLibrary/img/bs-guardiola.jpg?raw=true' }, //'img/bs-guardiola.jpg' },
            { name: 'Gheroghe HAGI', photo: 'https://raw.github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/master/04%20-%20UsingAngularWinjsLibrary/img/bs-hagi.jpg'}, // 'img/bs-hagi.jpg' },
            { name: 'Dario HUBNER', photo: 'https://raw.github.com/GianniBortoloBossini/20140321-AngularJSDay-WindowsStoreAppWithAngular/master/04%20-%20UsingAngularWinjsLibrary/img/bs-hubner.jpg'} // 'img/bs-hubner.jpg' }
        ];

        // THIS OBJECT MODEL DOES NOT WORK!
        //$scope.strongestFootballersEver = [
        //    { name: 'Roberto BAGGIO', photo: 'images/img/bs-baggio.jpg' },
        //    { name: 'Pep GUARDIOLA', photo: 'images/img/bs-guardiola.jpg' },
        //    { name: 'Gheorghe HAGI', photo: 'images/img/bs-hagi.jpg' },
        //    { name: 'Dario HUBNER', photo: 'images/img/bs-hubner.jpg' }
        //];
    })
})();
