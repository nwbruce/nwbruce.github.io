
var app = angular.module('bitsplitApp', []);

app.controller('bitsplitControl', function ($scope) {
	$scope.bitCount = '32';
	
	$scope.range = function(n) {
		var result = new Array();
		for (var i = parseInt(n)-1; i >= 0; i--) {
			result.push(i);
		}
		return result;
	}
	
	$scope.getBit = function(bit) {
		return (($scope.bitValue & Math.pow(2, bit)) > 0) ? 1 : 0;
	}
	
	$scope.overflow = function() {
		var p = Math.pow(2, $scope.bitCount);
		
		return $scope.bitValue >= p || $scope.bitValue < -p;
	}
});
