(function() {
	var app = angular.module('targetProducts', []);
	
	app.directive('productImageViewer', function() {
		return {
			restrict: "E",
			templateUrl: "directives/product-image-viewer.html",
			controller:function() {
				this.currImage = 0;
				this.select = function(imageIndex) {
				this.currImage=imageIndex;
				};
			},
			controllerAs:'imageViewer'
		};
	});
	
	app.directive('productReviews', function() {
		return {
			restrict: "E",
			templateUrl: "directives/product-reviews.html",
			controller:function() {
				this.getRange = function(n) {
					n = parseInt(n, 10);
					return new Array(n);
				};
			},
			controllerAs:'review'
		};
	});
	
	app.directive('productPurchase', function() {
		return {
			restrict: "E",
			templateUrl: "directives/product-purchase.html",
			controller:function () {
				this.checkProduct = function(state, code) {
				if(state==="cart") {
					if(code<=1) return true;
				} else {
					if(code===0 || code===2) return true;
				}
				};
			},
			controllerAs:'productPurchase'
		};
	});
	
	app.filter('dateFilter', function() {
		return function(date) {
			if(date) {
				var tmpDate = date.split(" ");
				var newDate = tmpDate[1] + ' ' + tmpDate[2] + ', ' +  tmpDate[5];
				return newDate;
			}
		};
	});
	
})();
