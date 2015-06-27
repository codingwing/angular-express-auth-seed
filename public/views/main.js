var app = angular.module('mainModule', ['ngRoute', 'ui.bootstrap', 'mainModule.login', 'mainModule.signup', 'mainModule.dashboard', 'mainModule.routing', 'mainModule.createWeddingRoute', 'mainModule.newCouple', 'mainModule.newWedding', 'mainModule.newReception', 'mainModule.newRegistry', 'mainModule.newPhotos', 'mainModule.weddingdocDataSvc', 'mainModule.viewWeddingRoute', 'mainModule.modelmgr', 'mainModule.modelsvc', 'mainModule.viewComments', 'mainModule.viewCarousel', 'mainModule.viewWedding']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/dashboard'
		})
		.otherwise({
			redirectTo: '/dashboard'
		});
});