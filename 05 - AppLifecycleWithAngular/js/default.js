// Per un'introduzione a modello vuoto, vedere la seguente documentazione:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    Windows.UI.WebUI.WebUIApplication.onactivated = function (args) {
        console.log("WinRT Activated");
    }
    Windows.UI.WebUI.WebUIApplication.onsuspending = function (args) {
        console.log("WinRT Suspending");
    }
    Windows.UI.WebUI.WebUIApplication.onresuming = function (args) {
        console.log("WinRT Resuming");
    }

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
                    console.log("App has been launched now!");
                } else {
                    // TODO: questa applicazione è stata riattivata dalla sospensione.
                    // Ripristinare lo stato dell'applicazione qui.
                    console.log("App was suspending!");
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

    document.addEventListener("DOMContentLoaded", function (e) {
        console.log("DOMContentLoaded");
    });

    app.start();

    //var app = WinJS.Application;
    //var activation = Windows.ApplicationModel.Activation;

    //app.onactivated = function (args) {
    //    if (args.detail.kind === activation.ActivationKind.launch) {
    //        if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
    //            // TODO: questa applicazione è stata appena avviata. Inizializzare
    //            // l'applicazione qui.
    //        } else {
    //            // TODO: questa applicazione è stata riattivata dalla sospensione.
    //            // Ripristinare lo stato dell'applicazione qui.
    //        }
    //        args.setPromise(WinJS.UI.processAll());
    //    }
    //};

    //app.onloaded = function () {

    //}

    //app.oncheckpoint = function (args) {
    //    // TODO: questa applicazione sta per essere sospesa. Salvare qui eventuali stati
    //    // che devono persistere attraverso le sospensioni. È possibile utilizzare l'oggetto
    //    // WinJS.Application.sessionState, che viene automaticamente
    //    // salvato e ripristinato in seguito a sospensioni. Se è necessario eseguire
    //    // un'operazione asincrona prima che l'applicazione venga sospesa, chiamare
    //    // args.setPromise().
    //};

    //app.start();
})();
