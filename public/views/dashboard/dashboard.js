var app = angular.module('mainModule.dashboard', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/dashboard', {
		controller: 'dashboardCtrl',
		templateUrl: 'views/dashboard/dashboard.tpl.html'
	});
});


app.controller('dashboardCtrl', function($scope, $location) {

	$scope.createWeddingBtnClicked = function() {
		//console.log('Create Wedding button is clicked');
		$location.path('createWedding');
	}

	$scope.viewWeddingBtnClicked = function() {
		//console.log('View Wedding button is clicked');
		$location.path('viewWedding');
	}


});
