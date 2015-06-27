var app = angular.module('mainModule.newPhotos', ['ngRoute', 'ngFileUpload']);

app.controller('newPhotolistCtrl', function ($scope, $location, $http, $timeout, $compile, Upload, weddingdocAdminService) {
    $scope.photolist = weddingdocAdminService.getPhotolistData();

    $scope.uploadPic = function (files) {
        $scope.formUpload = true;
        if (files != null) {
            upload(files[0])
        }
    };

    $scope.$watch('files', function (files) {
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });
    
     function upload(file) {
        $scope.errorMsg = null;
        uploadUsing$http(file);
//        $scope.howToSend = 2;
//        if ($scope.howToSend === 1) {
//            uploadUsingUpload(file);
//        } else if ($scope.howToSend == 2) {
//            uploadUsing$http(file);
//        } else {
//            uploadS3(file);
//        }
    }
    
    function uploadUsing$http(file) {
        file.upload = Upload.http({
            url: '/images',
            method: 'POST',
            headers: {
                'Content-Type': file.type
            },
            data: file
        });

        file.upload.then(function (response) {
            file.result = response.data;
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        });

        file.upload.progress(function (evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }








    // GET request here

    // POST request here
    $scope.savePhotoBtnClicked = function (photo) {
        console.log('Save photo button is clicked');
        console.log(photo);
        weddingdocAdminService.savePhotolistBtn(photo);

    }

    // UPDATE request here
    $scope.editPhotosBtnClicked = function () {


    }

    // CANCEL request here
    $scope.cancelPhotosBtnClicked = function () {
        console.log('Cancel photo button is clicked');
        $location.path('createWedding');
    }



});