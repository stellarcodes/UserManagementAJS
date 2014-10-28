(function() {
	var app = angular.module('userManagement');

	app.service('StorageService', [ '$log', function() {
		var self = this;

		self.add = function(key, value) {

			if (typeof (Storage) !== "undefined" && angular.isString(value) && key!=null) {

				localStorage.setItem(key, value);
				$log.log("Data is added for the key: " + key);
				return true;
			} else {
				$log.log("Web Storage is not supported!");
			}
			return false;
		};
		
		self.get = function(key) {

			if (typeof (Storage) !== "undefined" && key!=null) {
				$log.log("finding the data for the key: " + key);
				return localStorage.getItem(key);
			} else {
				$log.log("Web Storage is not supported!");
			}
			return null;
		};
		
		self.update = function(key, value) {

			if (typeof (Storage) !== "undefined" && angular.isString(value) && key!=null) {

				localStorage.setItem(key, value);
				$log.log("Data is updated for the key: " + key);
				return true;
			} else {
				$log.log("Web Storage is not supported!");
			}
			return false;
		};
		
		self.remove = function(key) {

			if (typeof (Storage) !== "undefined" && key!=null) {

				localStorage.removeItem(key);
				$log.log("Data is removed for the key: " + key);
				return true;
			} else {
				$log.log("Web Storage is not supported!");
			}
			return false;
		};
	} ]);

})();