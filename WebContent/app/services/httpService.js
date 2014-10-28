(function() {
	var app = angular.module('userManagement');

	app.service('HTTPService',['$http','$log',function($http,$log){
		
		var self=this; 
		
		self.config={};
		
		self.postRequest=function(config){
			
			self.config={
				success : config.success,
				error : config.error,
				url : config.url,
				onBefore: config.onBefore || null,
				headers : config.headers || { "Content-Type":'application/x-www-form-urlencoded; charset=utf-8'} ,
				data: config.data || ''
			};
			
			if(self.config.onBefore!=null){
				self.config.onBefore();
			}
			
			$http({
				url: self.config.url,
				method: "POST",
				data: self.config.data,
				headers:self.config.headers,
				transformRequest : function(data) {
					$log.log("Transforming request");
					if (data === undefined) {
						return data;
					}
					return $.param(data);
				}
			}).success(self.config.success).error(self.config.error);
			
		};
		
		self.getRequest=function(config){
			self.config={
					success : config.success,
					error : config.error,
					url : config.url,
					onBefore: config.onBefore || null
			};
			
			if(self.config.onBefore!=null){
				self.config.onBefore();
			}
			
			$http({
				url: self.config.url,
				headers : config.headers || { "Content-Type":'application/x-www-form-urlencoded; charset=utf-8'},
				method: "GET"
			}).success(self.config.success).error(self.config.error);
		};
		
	}]);
	
})();