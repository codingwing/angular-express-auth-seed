var app = angular.module('mainModule.newCouple', ['ngRoute']);


app.controller('newCoupleCtrl', function($scope, $location, weddingdocAdminService, theCouple) {
    console.log('the couple', theCouple)
    $scope.couple = theCouple.data.couple
    
    $scope.saveCoupleBtnClicked = function(couple){
        weddingdocAdminService.saveCoupleBtn(couple)
    }

	// UPDATE request here
	$scope.editCoupleBtnClicked = function() {
		console.log('Edit couple button is clicked');

	}

	// CANCEL request here
	$scope.cancelCoupleBtnClicked = function() {
		console.log('Cancel couple button is clicked');
		$location.path('createWedding');
	}

});

