
var app = angular.module('excelfixApp', []);

app.controller('excelfixControl', function ($scope) {
	$scope.fix = function() {
		$scope.output = $scope.input;
	}
});
