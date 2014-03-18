(function () {
    "use strict";
angular.module("app", [])
       .controller("appCtrl", function ($scope, $log) {
            
           // Gestione ciclo di vita secondo eventi WinRT
           Windows.UI.WebUI.WebUIApplication.onactivated = function (args) {
               console.log("WinRT Activated");
           }
           Windows.UI.WebUI.WebUIApplication.onsuspending = function (args) {
               console.log("WinRT Suspending");
           }
           Windows.UI.WebUI.WebUIApplication.onresuming = function (args) {
               console.log("WinRT Resuming");
           }

           document.addEventListener("DOMContentLoaded", function (e) {
               console.log("DOMContentLoaded");
           });


           // Gestione ciclo di vita secondo eventi WinJS
           var app = WinJS.Application;
           var activation = Windows.ApplicationModel.Activation;

           app.onloaded = function (args) {
               console.log("WinJS Loaded");
           }
           app.onactivated = function (args) {
               if (args.detail.kind === activation.ActivationKind.launch) {
                   if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                       // TODO: questa applicazione è stata appena avviata. Inizializzare
                       // l'applicazione qui.
                       console.log("App was closed!");
                   } else {
                       // TODO: questa applicazione è stata riattivata dalla sospensione.
                       // Ripristinare lo stato dell'applicazione qui.
                       console.log("App was suspended!");
                   }
                   args.setPromise(WinJS.UI.processAll());
               }
               console.log("WinJS Activated");
           };
           app.onready = function (args) {
               console.log("WinJS Ready");
           }
           app.oncheckpoint = function (args) {
               console.log("WinJS Checkpoint");
           };

           app.start();
       });
})();