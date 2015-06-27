var app = angular.module('mainModule.viewComments', ['ngRoute']);


app.controller('viewCommentsCtrl', function($scope, $location, weddingdocAdminService) {
	$scope.commentlist = weddingdocAdminService.getCommentlistData();
	
	if($scope.commentlist.length < 1){
		$scope.commentlist = [];
	}


	// GET request here


	// POST request here
	$scope.saveCommentBtnClicked = function(commentlist) {
		console.log('Save comment button is clicked');
	 	//console.log(commentlist);
	 	//$scope.commentlist.push(commentlist);
        if ($scope.guestcomment != '') {
            $scope.commentlist.push($scope.guestcomment);
            $scope.guestcomment ='';
        }
	 	weddingdocAdminService.saveCommentBtn(commentlist);
	}

	// UPDATE request here
	$scope.editCommentBtnClicked = function() {
		console.log('Edit comment button is clicked');

	}

	// CANCEL request here
	$scope.cancelCommentBtnClicked = function() {
		console.log('Cancel comment button is clicked');
		$location.path('viewWedding');
	}

});

