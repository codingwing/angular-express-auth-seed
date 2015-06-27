var app = angular.module('mainModule.viewWeddingRoute', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/viewCouple', {
            controller: 'viewCoupleCtrl',
            templateUrl: '/views/viewWedding/couple/viewcouple.tpl.html',
            resolve: {
                theCouple: function (weddingdocAdminService) {
                    return "hello"
                }
            }
        })
        .when('/viewWedding', {
            controller: 'viewWeddingCtrl',
            templateUrl: '/views/viewWedding/viewweddingmain.tpl.html',
            resolve: {
                theWedding: function (weddingdocAdminService) {
                    return weddingdocAdminService.getWeddingData();
                }
                
//                theCouple: function (weddingdocAdminService) {
//                    return weddingdocAdminService.getCoupleData();
            }

        })
        .when('/viewReception', {
            //controller: 'viewReceptionCtrl',
            templateUrl: '/views/viewWedding/reception/viewreception.tpl.html'
        })
        .when('/viewRegistry', {
            //controller: 'viewRegistryCtrl',
            templateUrl: '/views/viewWedding/registry/viewregistry.tpl.html'
        })
        // .when('/viewPhotos', {
        // 	controller: 'viewPhotosCtrl',
        // 	templateUrl: '/views/viewWedding/photos/viewphotos.tpl.html'
        // })
        .when('/viewComments', {
            controller: 'viewCommentsCtrl',
            templateUrl: '/views/viewWedding/comments/viewcomments.tpl.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});



// app.controller('viewWeddingCtrl', function($scope, $location) {
// 	$scope.coupleBtnClicked = function() {
// 		$location.path('views/couple/couple.tpl.html');
// 	}
// });