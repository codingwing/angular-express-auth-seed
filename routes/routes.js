/***************************************************************************
    These routes are API routes only - meaning this project seed
    is not built to manage ui/pages for an entire website. It is set
    up to deliver the initial HTML page, and then the Angular app
    should handle all routes after that point. Any route that requires
    that the user be authenticated before using that endpoint should
    use the isAuthenticated middleware in this file  
***************************************************************************/

var express = require('express');
var mongoose = require('mongoose');
var Couple = require('../model/weddingschema').Couple;
var Reception = require('../model/weddingschema').Reception;
var Registry = require('../model/weddingschema').Registry;
var Photo = require('../model/weddingschema').Photo;
var Wedding = require('../model/weddingschema').Wedding;
//var WeddingDoc = require('../model/weddingschema').WeddingDoc;
var router = express.Router();
var debug = require('debug')('dev');
var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.json('Unauthorized user. Please first log in.');
}

module.exports = function (passport) {

    /* GET login or main page. Does NOT require authentication */
    router.get('/', function (req, res) {
        // The main page to display
        debug('GET: index.html');
        res.render('index.html');
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login'), function (req, res) {
        res.json("Succesfully logged in");
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup'), function (req, res) {
        res.json("Succesfully signed up");
    });

    //    router.get('/weddingsitedata', function (req, res) {
    //        WeddingDoc.couple.find({}, function (err, couple) {
    //            if (err)
    //                res.status(401).send("Error looking up couple");
    //            console.log("Couple", couple);
    //            res.send(couple);
    //        });
    //    });

    //    var couple = new WeddingDoc.couple({
    //        bridesName: "Alicia Jensen",
    //        groomsName: "Richard Anderson",
    //        ourStory: "Alicia & Richard's story goes here..."
    //    });
    //
    //    couple.save(function (err, weddingsitedata) {
    //        console.log(err);
    //        console.log(weddingsitedata);
    //    });
    


    var BASE_URL = "/data";
    
    router.post(BASE_URL + '/couple', function(req, res){
        var newWedding = new Wedding(req.body)
        console.log(req.body)
        newWedding.save(function(err, couple){
            if(err) {
                console.log(err);
                res.status(500).send(err)
            }
            res.status(200).send(couple)
        })
    })
    
    router.post(BASE_URL + '/wedding', function(req, res){
        Wedding.findOneAndUpdate({ user: 'User1' }, req.body, function(err, wedding){
            if(err) {
                res.status(500).send(err)
            }
            res.status(200).send(wedding);
        })
    })
    
    router.post(BASE_URL + '/reception', function(req, res){
        Wedding.findOneAndUpdate({ user: 'User1' }, req.body, function(err, reception){
            if(err) {
                res.status(500).send(err)
            }
            res.status(200).send(reception);
        })
    })
    
    router.post(BASE_URL + '/comments', function(req, res){
        console.log(req.body)
        Wedding.findOneAndUpdate(
            { user: 'User1' }, 
            {$push: { comment: req.body }},
            { new: true},
            function(err, comments){
                if(err) {
                    console.log(err)
                    res.status(500).send(err)
                }
                console.log('returned from comment update', comments);
                res.status(200).send(comments);
            })
    })
    
    router.post(BASE_URL + '/registry', function(req, res){
        console.log(req.body)
        Wedding.findOneAndUpdate(
            { user: 'User1' }, 
            req.body,
            function(err, registry){
                console.log(registry)
                if(err) {
                    res.status(500).send(err)
                } 
                res.status(200).send(registry)
            })   
    })
    
     router.get(BASE_URL + '/wedding', function(req, res){
        Wedding.findOne({ user: 'User1'}, function(err, registry){
            console.log('registry', registry)
            res.status(200).send(registry);
        })
    })
    
    /* COMMENTS
    router.post(BASE_URL + '/comments', function(req, res){
        //find the wedding
        //add { comment: {
            author: req.user._id,
            text: req.body.comment.text
        }
    })
    
    */
    
    //console.log(BASE_URL + '/wedding');
    // NEED A PARAMETER THAT INCLUDES THAT ID OF THE NEW WEDDING SOMEHOW
    router.get(BASE_URL + '/wedding', function (req, res) {
        Wedding.find({ user: 'User1' }, function (err, wedding) {
            if (err)
                res.status(401).send("Error looking up wedding");
            console.log("Wedding", wedding);
            res.send(wedding);
        })
    });
    
    
    
//    var couple = new Couple({
//        bridesName: "Mary Jones",
//        groomsName: "Arrow Smith",
//        ourStory: "We met at Imax"
//    });
//
//    var reception = new Reception({
//        date: new Date(),
//        time: new Date(),
//        location: 'The Blue House Restaurant',
//        description: 'Bring your dancing shoes'
//    });
//
//    var registry1 = new Registry({
//        linkUrl: 'http://www.walmart.com'
//    });
//
//    var registry2 = new Registry({
//        linkUrl: 'http://www.supertarget.com'
//    });
//
//
//    var photo1 = new Photo({
//        caption: 'We are Mr. and Mrs. Smith',
//        img: '0.jpg'
//    });
//
//    var photo2 = new Photo({
//        caption: 'Rings n Roses.',
//        img: '1.jpg'
//    });
//
//    var photo3 = new Photo({
//        caption: 'Our wedding rings!',
//        img: '2.jpg'
//    });
//
//    var photo4 = new Photo({
//        caption: 'We do!',
//        img: '3.jpg'
//    });
//
//    var photo5 = new Photo({
//        caption: 'White Roses.',
//        img: '4.jpg'
//    });
//
//    
//    var wedding = new Wedding({
//        date: new Date(),
//        time: new Date(),
//        location: 'The Beach',
//        description: 'Classic wedding',
//       couple: couple,
//        reception: reception
//    });
    
//   wedding.couple.push(couple);
//    wedding.registry.push(registry1);
//    wedding.registry.push(registry2);
    
//    wedding.photo.push(photo1);
//    wedding.photo.push(photo2);

//    for (i = 1; i < 6; i++) {
//        
//        wedding.photo.push('photo' + i);
//    }

    //        comments: [
    //            {
    //                text: 'Congratulations! We love you...'
    //        },
    //            {
    //                text: 'Congrats! We love you too...'
    //        }]

//
//    wedding.save(function (err, weddingsitedata) {
//        //console.log(err);
//        console.log(weddingsitedata);
//    });

    //Test route
    router.get('/items', isAuthenticated, function (req, res) {
        res.json(["car", "bank", "toy", "dog"]);
    });


    /* Handle Logout */
    router.get('/signout', function (req, res) {
        req.logout();
        res.json('Successfully logged out');
    });

    return router;
}