
var app = angular.module('bitsplitApp', []);

app.controller('bitsplitControl', function ($scope) {
	$scope.bitCount = '32';

	$scope.getBits = function() {
		var result = new Array();
		for (var b = parseInt($scope.bitCount)-1; b >= 0; b--) {
			var value = (($scope.bitValue & Math.pow(2, b)) > 0) ? 1 : 0;
			result.push(value);
		}
		return result;
	}
	
	$scope.overflow = function() {
		var p = Math.pow(2, $scope.bitCount);
		
		return $scope.bitValue >= p || $scope.bitValue < -p;
	}
});
