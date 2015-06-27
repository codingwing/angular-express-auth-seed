var app = angular.module('mainModule.modelmgr', []);

app.service('weddingdocAdminService', function ($http, $q, $location) {
    
    var BASE_URL = "http://localhost:5050/data";
    
    
    // COUPLE
    this.saveCoupleBtn = function (couple) {
        
        //weddingdocDataBank.couple = couple;
//        $http.post({
//            method: 'POST',
//            url: BASE_URL + '/couple',
//            data: {
//                couple: couple
//            }
//        })
//        
        $http.post(BASE_URL + '/couple', {couple:couple})
            .success(function (data) {
                alert('Couple information saved')
                $location.path('/newWedding')
                return data;
            });
    }
    this.getCoupleData = function () {
        //return weddingdocDataBank.couple;
        return $http.get(BASE_URL + '/wedding')
            .success(function (data, status) {
                //console.log(data[0].couple)
                return data[0].couple;
            });
    };

    // WEDDING
    this.saveWeddingBtn = function (wedding) {
        console.log(wedding)
        // weddingdocDataBank.wedding = wedding;
        //console.log(weddingdocDataBank.weddingdocObj);
        $http.post(BASE_URL + '/wedding', wedding)
            .success(function (data) {
                alert('Wedding information saved')
                $location.path('/newReception')
                return data;
            });
    }
    this.getWeddingData = function () {
        //return weddingdocDataBank.wedding;
        return $http.get(BASE_URL + '/wedding')
            .success(function (data, status) {
                console.log(data);
                return data;
            });
    };

    // RECEPTION
    this.saveReceptionBtn = function (reception) {
        //weddingdocDataBank.reception = reception;
        //console.log(weddingdocDataBank.weddingdocObj        
        $http.post(BASE_URL + '/reception', {reception:reception})
            .success(function (data) {
                alert('Reception information saved')
                $location.path('/newRegistry')
                return data;
            });
    }
    this.getReceptionData = function () {
        //return weddingdocDataBank.reception;
        return $http.get(BASE_URL + '/wedding')
            .success(function (data, status) {
                return data;
            });
    };

    // REGISTRY
    this.saveRegistryBtn = function (registry) {
        console.log(registry)
        //weddingdocDataBank.registry = registry;
        //console.log(weddingdocDataBank.registry);
        $http.post(BASE_URL + '/registry', {registry: registry})
            .success(function (data) {
                alert('Registry information saved')
               // $location.path('/newPhotos')
                return data;
            });
    }
    this.getRegistryData = function () {
      
        //return weddingdocDataBank.registry;
        return $http.get(BASE_URL + '/wedding')
            .success(function (data, status) {
                console.log(data)
                return data.registry;
            });
    };

    //  PHOTO
    this.savePhotolistBtn = function (photolist) {
        //weddingdocDataBank.photolist = photolist;
        //console.log(weddingdocDataBank.registry);
        $http.post(BASE_URL + '/photo', postData)
            .success(function (data) {
                return data;
            });
    }
    this.getPhotolistData = function () {
        //return weddingdocDataBank.photolist;
       return $http.get(BASE_URL + '/photo')
            .success(function (data, status) {
                return data;
            });
    };

    // COMMENT
    this.saveCommentBtn = function (comment) {
        console.log(comment)
        var dfd = $q.defer()
        $http.post(BASE_URL + '/comments', comment)
            .then(function(res){
              console.log('data from savecomment', res)
            var comments = res.data.comment
            dfd.resolve(comments);
        })
        return dfd.promise
        
//        //weddingdocDataBank.commentlist = commentlist;
//        //console.log(weddingdocDataBank.registry);
//        return $http.post(BASE_URL + '/comments', comment)
//            .success(function (data) {
//                
//                $location.path('/viewWedding')
//                return data;
//            });
    }
    this.getCommentlistData = function () {
        //return weddingdocDataBank.commentlist;
        return $http.get(BASE_URL + '/wedding')
            .success(function (data, status) {
                return data;
            });
    };
});