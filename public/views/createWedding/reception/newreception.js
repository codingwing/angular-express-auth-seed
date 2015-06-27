var app = angular.module('mainModule.newReception', ['ngRoute']);

app.controller('newReceptionCtrl', function($scope, $location, weddingdocAdminService, theReception) {
	$scope.reception = theReception.data.reception;

	// GET request here

	// POST request here
	$scope.saveReceptionBtnClicked = function(reception) {
	 	console.log(reception);
	 	weddingdocAdminService.saveReceptionBtn(reception);
	}

	// UPDATE request here
	$scope.editReceptionBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelReceptionBtnClicked = function() {
		console.log('Cancel reception button is clicked');
		$location.path('createWedding');
	}

	

});