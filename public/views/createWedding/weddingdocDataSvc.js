var app = angular.module('mainModule.weddingdocDataSvc', []);

var url = 'http://....';

app.factory('weddingdocDataSvc', function($http, $q) {
	return {
		getWeddingDoc: function() {
			var deferred = $q.defer();
			$http.get(url)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data) {
				deferred.reject(data);
			});
			return deferred.promise;
		},

		addWeddingDoc: function(weddingdoc) {
			var deferred = $q.defer();
			$http.post(url, weddingdoc)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		},

		updateWeddingDoc: function(weddingdoc) {
			var deferred = $q.defer();

			var id = course._id.$oid;

			$http.put(url+"/"+id, weddingdoc)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(error) {
				deferred.reject(error);
			});

			return deferred.promise;
		},

		deleteWeddingDoc: function(weddingdoc) {
			var deferred = $q.defer();

			var id = weddingdoc._$objectid;

			$http.delete(url+"/"+id)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(error) {
				deferred.reject(error);
			});

			return deferred.promise;
		},
	}
});


app.controller('weddingdocCtrl', function($scope, $http, weddingdocDataSvc) {
	$scope.courses = [];

			// to load wedding doc
			$scope.loadWeddingDoc = function() {
				weddingdocDataSvc.getWeddingDoc().then(success, error);
				
				function success(response) {
					$scope.weddingdoc = response;
				}
				
				function error(e) {
					console.log("error: ", e);
				}
			}
			
			// to add wedding doc
			$scope.addWeddingDoc = function(weddingdoc) {
				weddingdocDataSvc.addWeddingDoc(weddingdoc).then(
					function(response) {
						$scope.loadWeddingDoc();
					},
					function(error) {
						console.log("error: ", e);
					}
					);
			}
			
			// to update wedding doc
			$scope.updateWeddingDoc = function (weddingdoc) {
				weddingdocDataSvc.updateWeddingDoc(weddingdoc).then(
					function(response) {
						$scope.loadWeddingDoc();
					},
					function(error) {
						console.log("error: ", e);
					}
					);
			}
			
			// to delete wedding doc
			$scope.deleteWeddingDoc = function (weddingdoc) {
				weddingdocDataSvc.deleteWeddingDoc(weddingdoc).then(
					function(response) {
						$scope.loadWeddingDoc();
					},
					function(error) {
						console.log("error: ", e);
					}
					);
			}
		});