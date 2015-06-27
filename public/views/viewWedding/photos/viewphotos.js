var app = angular.module('mainModule.viewPhotos', ['ngRoute']);

app.controller('viewPhotosCtrl', function($scope, $location) {
	
	// GET request here

	// POST request here
	$scope.addPhotosBtnClicked = function() {
	 
	}

	// UPDATE request here
	$scope.editPhotosBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelPhotosBtnClicked = function() {
		console.log('Cancel photos button is clicked');
		$location.path('viewWedding');
	}

	

});