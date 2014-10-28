(function() {

	var app = angular.module('userManagement');

	app.controller('MessageController', [
			'$scope',
			'$log',
			function($scope, $log) {
				
				$scope.isMessage = false;
				$scope.messageContent = '';
				$scope.messageSeverityInfo = false;
				$scope.messageSeverityWarn = false;
				$scope.messageSeverityError = false;
				$scope.messageSeveritySuccess = false;

				$scope.$on('Message', function(content, data) {

					$log.log("Message is received :" + angular.toJson(data)
							+ " Content:" + angular.toJson(content));

					if (angular.isObject(data)) {
						
						$log.log("Messgae is having valid content");

						$scope.isMessage = data.isMessage;
						$scope.messageContent = data.messageContent;

						if (data.messageSeverity == "INFO") {

							$log.log("Severity is INFO");
							$scope.messageSeverityInfo = true;

						} else if (data.messageSeverity == "WARN") {
							
							$log.log("Severity is WARN");
							$scope.messageSeverityWarn = true;

						} else if (data.messageSeverity == "SUCCESS") {

							$log.log("Severity is SUCCESS");
							$scope.messageSeveritySuccess = true;

						} else if (data.messageSeverity == "ERROR") {

							$log.log("Severity is ERROR");
							$scope.messageSeverityError = true;

						}
					}
				});

			} ]);

})();