
function fix_it(input) {
	var output = input.trim();
	if (output.length >= 2) {
		if (output[0] == "\"" && output[input.length-1] == "\"") {
			output = output.substring(1, output.length-1);
		}
	}

	output = output.replace(/"\n"/g, "\n\n\n");
	output = output.replace(/""/g, "\"");

	return output;
}

var app = angular.module('excelfixApp', []);

app.controller('excelfixControl', function ($scope) {
	$scope.fix = function() {
		$scope.output = fix_it($scope.input);
	}
});
