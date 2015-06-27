var app = angular.module('mainModule.newWedding', ['ngRoute']);


app.controller('newWeddingCtrl', function($scope, $location, weddingdocAdminService, theWedding) {
    console.log('the wedding', theWedding);
	$scope.wedding = theWedding.data;
	// GET request here

	// POST request here
	$scope.saveWeddingBtnClicked = function(wedding) {
	 	//console.log('Save wedding button is clicked');
	 	//console.log(wedding);
	 	weddingdocAdminService.saveWeddingBtn(wedding);
	}

	// UPDATE request here
	$scope.editWeddingBtnClicked = function() {
		console.log('Edit wedding button is clicked');
	}

	// CANCEL request here
	$scope.cancelWeddingBtnClicked = function() {
		console.log('Cancel wedding button is clicked');
		$location.path('createWedding');
	}

	
});