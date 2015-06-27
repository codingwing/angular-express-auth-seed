var app = angular.module('mainModule.newRegistry', ['ngRoute']);

app.controller('newRegistryCtrl', function($scope, $location, weddingdocAdminService) {

   var registry = weddingdocAdminService.getRegistryData().then(function(res){
        console.log('controller', res)
        var reg = res.data.registry
        
        $scope.registry = [
            { linkUrl: reg[0].linkUrl },
            { linkUrl: reg[1].linkUrl },
            { linkUrl: reg[2].linkUrl }
        ];
   });
//	
//	if($scope.registry.length < 1){
//		$scope.registry = [{}];
//	}

//	$scope.addNewLink = function() {
//   		$scope.registry.push($scope.registry.linkUrl);
//	}

//	$scope.showLinkLabel = function (link) {
//		return link.id === $scope.registry[0].id;
//	}

	$scope.removeLink = function(index) {
		$scope.registry.splice(index, 1);
	}	

	// GET request here

	// POST request here
	$scope.saveRegistryBtnClicked = function(registry) {
		console.log('Save registry button is clicked');
		console.log(registry);
        
        var data = [
            { linkUrl: registry[0].linkUrl },
            { linkUrl: registry[1].linkUrl },
            { linkUrl: registry[2].linkUrl }
        ]
        
        console.log(data)
		weddingdocAdminService.saveRegistryBtn(data); 

	}

	// UPDATE request here
	$scope.editRegistryBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelRegistryBtnClicked = function() {
		console.log('Cancel registry button is clicked');
		$location.path('createWedding');
	}

	

});