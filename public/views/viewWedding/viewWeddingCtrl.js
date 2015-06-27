var app = angular.module('mainModule.viewWedding', ['ngRoute']);

app.controller('viewWeddingCtrl', function($scope, $location, weddingdocAdminService, theWedding) {
   // console.log('theWedding is ' + theWedding);
    console.log(theWedding);
    var wedding = theWedding.data
    
    $scope.couple = wedding.couple;
    $scope.wedding = wedding;
    $scope.reception = wedding.reception;
    $scope.registry = wedding.registry;
    $scope.commentlist = wedding.comment
    
    $scope.saveCommentBtnClicked = function(comment){
        weddingdocAdminService.saveCommentBtn(comment).then(function(res){
            console.log(res)
            $scope.comment.text = "";
            $scope.comment.name = "";
            $scope.commentlist = res;
        })
    };
    
    $scope.test = 'TEST TEST TEST TEST'
//    $scope.bridesName = wedding.bridesName;
//     $scope.groomsName = wedding.groomsName;
    
});