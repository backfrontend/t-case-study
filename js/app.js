(function(){
var app = angular.module('targetStore', ['ngAnimate', 'ngSanitize', 'targetProducts']);

app.controller('ProductController', ['$http', function($http) {
	var productDetails = this;
	productDetails.info = [];
	
	$http({method: 'GET', url: 'data/item-data.json'
	}).then(function successCallback(response) {
		productDetails.info = response.data;
	}, function errorCallback(response) {
		console.log('error');
	});
}]);

})();



