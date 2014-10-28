(function() {
	var app = angular.module('userManagement');

	app.controller('LoginController',[ '$scope', '$rootScope',
							'$log',
							'HTTPService',
							'$location',
							'StorageService',
							function($scope, $rootScope, $log, HTTPService,
									$location, StroageService) {
								var self = this;
								self.user = {};
								self.doLogin = function() {

									$log.log(JSON.stringify(self.user));

									HTTPService
											.postRequest({
												url : "http://localhost:8080/UserManagementREST/service/user/login",
												data : self.user,
												headers : {
													"Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
												},
												success : onSuccess,
												error : onError
											});
								};

								function onSuccess(data) {
									$log.log(JSON.stringify(data));

									if (angular.isObject(data)) {

										$log.log("Result is received!");

										if (data != null && data.result != null) {

											$log.log("Moving to dashboard!");

											$rootScope.$broadcast('Login', {
												isLoggedIn : true
											});

											$location.url('/dash');

										} else if (data.info != null) {

											$log.log("Message info..");

											$scope.$broadcast('Message', {
												isMessage : true,
												messageContent : data.info,
												messageSeverity : 'INFO'
											});
										} else if (data.warning != null) {

											$log.log("Message warn..");

											$scope.$broadcast('Message', {
												isMessage : true,
												messageContent : data.warning,
												messageSeverity : 'WARN'
											});
										} else if (data.error != null) {

											$log.log("Message Error..");

											$scope.$broadcast('Message', {
												isMessage : true,
												messageContent : data.error,
												messageSeverity : 'ERROR'
											});
										}

									}

								}
								function onError(data) {
									$log.log(JSON.stringify(data));
								}

							} ]);
})();