(function() {
	var app = angular.module('userManagement');
	app.controller('DashBoardController', [ '$location', '$scope', '$log',
			'HTTPService', function($location, $scope, $log, HTTPService) {

				var self = this;

				self.isInProgress = false;
				self.allUsers = {};
				
				self.editable={};
				
				self.setEditable=function(value){
					self.editable=value;
				};

				self.getAllUsers=function(){
					
					$log.log('Fetching all users!');
	
					HTTPService.getRequest({
						url : "http://localhost:8080/UserManagementREST/service/user/getAllUsers",
						success : onSuccess,
						error : onError
					});
				};
				
				self.update=function(){
					$log.log('Updating current profile!');
					HTTPService.postRequest({
						url : "http://localhost:8080/UserManagementREST/service/user/updateUser",
						data: self.editable,
						headers : {
							"Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
						},
						success : onUpdateSuccess,
						error : onUpdateError
					});
				};
				
				
				function onUpdateSuccess(data){
					$log.log("Success Result is received!");
					if(data!=null && angular.isObject(data)){
						$log.log("Received data has valid content!");
						$scope.$broadcast('Message', {
							isMessage : true,
							messageContent : data.success,
							messageSeverity : 'SUCCESS'
						});
					}
				}
				
				function onUpdateError(data){
					$log.log("Error Result is received!"+angular.toJson(data));
				}

				function onSuccess(data) {
					$log.log("Success Result is received!");
					if(data!=null && angular.isObject(data)){
						$log.log("Received data has valid content!");
						
						self.allUsers=data.result;
						
					}
				}

				function onError(data) {
					$log.log("Error Result is received!"+angular.toJson(data));
				}

			}]);
})();