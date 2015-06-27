var app = angular.module('mainModule.createWeddingRoute', ['ngRoute']);

app.config(function($routeProvider) {
//console.log('createWedding config loaded');

$routeProvider
.when('/newCouple', {
	controller: 'newCoupleCtrl',
	templateUrl: '/views/createWedding/couple/newcouple.tpl.html',
	//activeTab: 'newcouple'
    resolve: {
        theCouple: function(weddingdocAdminService){
            return weddingdocAdminService.getCoupleData();
        }
    }
})
.when('/newWedding', {
	controller: 'newWeddingCtrl',
	templateUrl: '/views/createWedding/wedding/newwedding.tpl.html',
	//activeTab: 'newwedding',
    resolve: {
        theWedding: function(weddingdocAdminService){
            return weddingdocAdminService.getWeddingData();
        }
    }

})
.when('/newReception', {
	controller: 'newReceptionCtrl',
	templateUrl: '/views/createWedding/reception/newreception.tpl.html',
	//activeTab: 'newreception',
    resolve: {
        theReception: function(weddingdocAdminService){
            return weddingdocAdminService.getReceptionData();
        }
    }

})
.when('/newRegistry', {
	controller: 'newRegistryCtrl',
	templateUrl: '/views/createWedding/registry/newregistry.tpl.html'
//    resolve: {
//        theRegistry: function(weddingdocAdminService){
//            return weddingdocAdminService.getRegistryData();
//        }
//    }
})
.when('/newPhotos', {
	controller: 'newPhotolistCtrl',
	templateUrl: '/views/createWedding/photos/newphotos.tpl.html'
})
.when('/newGuestlist', {
	controller: 'newGuestlistCtrl',
	templateUrl: '/views/createWedding/guestlist/newguestlist.tpl.html'
})
	.when('/wellwishes', {
	controller: 'wellwishesCtrl',
	templateUrl: '/views/createWedding/wellwishes/wellwishes.tpl.html'
})

.otherwise(
	{redirectTo: '/dashboard'});
});

