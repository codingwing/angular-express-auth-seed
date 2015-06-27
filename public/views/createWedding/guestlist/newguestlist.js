var app = angular.module('mainModule.newGuestlist', ['ngRoute']);

app.controller('newGuestlistCtrl', function($scope, $location, weddingdocAdminService) {
	$scope.guestlist = weddingdocAdminService.getGuestlistData();
	
	if($scope.guestlist.length < 1){
		$scope.guestlist = [{}];
	}

	$scope.addNewGuest = function() {
   		$scope.guestlist.push({});
	}

	// $scope.showGuestLabel = function (guest) {
	// 	return guest.id === $scope.guestlist[0].id;
	// }

	$scope.removeGuest = function(guest) {
		$scope.guestlist.splice(index, 1);
	}


	// GET request here

	// POST request here
	$scope.saveGuestlistBtnClicked = function(guestlist) {
		console.log('Save guestlist button is clicked');
		console.log(guestlist);
		weddingdocAdminService.saveGuestlistBtn(guestlist);
	 
	}

	// UPDATE request here
	$scope.editGuestlistBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelGuestlistBtnClicked = function() {
		console.log('Cancel guestlist button is clicked');
		$location.path('createWedding');
	}

	

});