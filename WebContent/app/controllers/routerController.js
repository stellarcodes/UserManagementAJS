(function() {
	var app = angular.module('userManagement');
	app.controller('RouterController', [ '$scope', '$rootScope', '$log', '$location',
			function($scope, $rootScope, $log, $location) {

				var self = this;

				self.tab = 1;
				
				self.isLoggedIn=false;

				this.setTab = function(value) {
					self.tab = value;
				};

				this.isTab = function(value) {
					return self.tab === value;
				};
				
				this.logout=function(){
					$log.log("log out is called!");
					self.isLoggedIn=false;
					$location.url('/login');
				};
				
				$rootScope.$on('Login',function(content,data){
					$log.log("Login Event is triggered : "+angular.toJson(data));
					self.isLoggedIn=true;		
					self.setTab(3);
				});

			} ]);

})();