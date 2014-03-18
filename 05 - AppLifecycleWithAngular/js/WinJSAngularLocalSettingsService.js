app.service('WinJSAngularLocalSettingsService', function () {
    var applicationData = Windows.Storage.ApplicationData.current;

    var localSettings = applicationData.localSettings;

    this.save = function (key, data) {
        localSettings.values[key] = data;
    }

    this.get = function (key) {
        var value = localSettings.values[key];
        if (!value) {
            return undefined;
        }
        else {
            return value;
        }
    }
    
    this.delete = function (key) {
        localSettings.values.remove(key);
    }

    this.clear = function () {
        //Local | local	            0	
        //The data resides in the local application data store.

        //Roaming | roaming	        1	
        //The data resides in the roaming application data store.

        //Temporary | temporary	    2	
        //The data resides in the temporary application data store.

        //LocalCache | localCache	3	
        //The data resides in the local cache for the application data store.
        return applicationData.clearAsync(0);
    }
});