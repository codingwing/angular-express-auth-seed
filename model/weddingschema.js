var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objId = mongoose.Schema.ObjectId;

//var WeddingDocSchema = mongoose.Schema({
//    couple: //{bridesName: String, groomsName: String, ourStory: String},
//    wedding: //{date: Date, time: Date, location: String, description: String},
//    reception: ReceptionSchema//{date: Date, time: Date, location: String, description: String},
//    registry: RegistrySchema//[String],
//    photo: //[{imgUrl: String, caption: String}]
//});

//module.exports = {
//    WeddingDoc: mongoose.model('WeddingDoc', WeddingDocSchema)
//};

//var childSchema = new Schema({ name: 'string' });
//
//var parentSchema = new Schema({
//  children: [childSchema]
//})

//var CoupleSchema = mongoose.Schema({
//    bridesName: String,
//    groomsName: String,
//    ourStory: String,
//});
//var CoupleSchema = new Schema({
//    bridesName: String,
//    groomsName: String,
//    ourStory: String,
//});

//var ReceptionSchema = new Schema({
//    date: Date,
//    time: Date,
//    location: String,
//    description: String
//});

//var RegistrySchema = new Schema({
//    linkUrl: String
//});
//
////var PhotoSchema = new Schema({
//caption: String,
//    img: String
//});

var WeddingSchema = new Schema({
    user: {type: String, default: 'User1'},
    date: Date,
    time: String,
    location: String,   
    description: String,
    couple: {
        bridesName: {type: String, required: true },
        groomsName: {type: String, required: true },
        ourStory: {type: String, required: true },
    },
    reception: {
        date: Date,
        time: String,
        location: String,
        description: String
    },
    registry: [{
        linkUrl: String
    }],
    photo: [{
        caption: String,
        img: String
        }],
    comment: [{
        name: String,
        text: String,
        createdAt: {type: Date, default: Date.now}
    }]
});


//var CommentSchema = new Schema({
//    text: String
//});

module.exports = {
    Wedding: mongoose.model('wedding', WeddingSchema)
//    Couple: mongoose.model('couple', CoupleSchema),
//    Wedding: mongoose.model('wedding', WeddingSchema),
//    Reception: mongoose.model('reception', ReceptionSchema),
//    Registry: mongoose.model('registry', RegistrySchema),
//    Photo: mongoose.model('photo', PhotoSchema)
};


//module.exports = {
//    Couple: mongoose.model('couple', CoupleSchema),
//    Wedding: 
//mongoose.model('wedding', WeddingSchema),
//    Reception: mongoose.model('reception', ReceptionSchema),
//    Registry: mongoose.model('registry', RegistrySchema),
//    Photo: mongoose.model('photo', PhotoSchema)
//};