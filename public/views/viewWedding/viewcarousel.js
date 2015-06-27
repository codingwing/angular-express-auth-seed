var app = angular.module('mainModule.viewCarousel', ['ngRoute', 'ui.bootstrap']);

app.controller('viewCarouselCtrl', function ($scope, $location, weddingdocAdminService) {
    // $scope.slides = weddingdocAdminService.getPhotolistData();
    
    $scope.myInterval = 3000;
    $scope.uri = "http://localhost:5050/images";
    $scope.slides = [
        {
            caption: 'We are Mr. and Mrs. Smith',
            img: '0.jpg'
        },
        {
            caption: 'Rings n Red Roses.',
            img: '1.jpg'
        },

        {
            caption: 'Our wedding rings!',
            img: '2.jpg'
        },
        {
            caption: 'We do!',
            img: '3.jpg'
        },
        {
            caption: 'White Roses.',
            img: '4.jpg'
        }];
});