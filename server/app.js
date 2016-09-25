var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
var mongojs = require('mongojs');
var db = mongojs("p2p", ['orders']);

app.use(bodyParser());
app.use(function(req,res,next){
    next();
    console.log(req.method,req.path,req.body);
});

// // Connection URL
// var url = 'mongodb://localhost:27017/myproject';
// var database;
// var orders;
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
// 	if (err){
// 		console.log(err);
// 	}
//   assert.equal(null, err);
//   database = db;
//   orders = db.collection("Orders");
//   console.log("Connected correctly to server");
// /*  db.createCollection( "contacts",
//    {
//       validator: { $or:
//          [
//             { phone: { $type: "string" } },
//             { email: { $regex: /@mongodb\.com$/ } },
//             { status: { $in: [ "Unknown", "Incomplete" ] } }
//          ]
//       }
//    }
// );*/
//  /* db.collection.insert( { name: "Harold", status: "Incomplete" } )*/

// });

app.use('/',express.static(path.resolve(__dirname,'../www')));

app.route('/api/orders')
.get(function (req, res) {
	var status = req.query.complete;
  console.log("you got it");
	if (status){
		db.orders.find({complete: true}, function(err, docs) {
      if (err) console.log(err);
      res.json(docs);
    });
	}else{
		db.orders.find({complete: false}, function(err, docs){
      if (err) console.log(err);
      res.json(docs);
    });
	}
/*  insertDocuments(db, function() {
    updateDocument(db, function() {
      deleteDocument(db, function() {
        findDocuments(db, function() {
          db.close();
        });
      });
    });
  });*/

})
.post(function (req,res){
	db.orders.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});



app.listen(8100, function () {
  console.log('Example app listening on port 8100!');
});

// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the document collection");
//     callback(result);
//   });
// }

// var updateDocument = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Update document where a is 2, set b equal to 1
//   collection.updateOne({ a : 2 }
//     , { $set: { b : 1 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });
// }

// var deleteDocument = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.deleteOne({ a : 3 }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Removed the document with the field a equal to 3");
//     callback(result);
//   });
// }

// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     assert.equal(2, docs.length);
//     console.log("Found the following records");
//     console.dir(docs);
//     callback(docs);
//   });
// }

// function exitHandler(options, err) {
//     database.close();
// }

// //do something when app is closing
// process.on('exit', exitHandler);

// //catches ctrl+c event
// process.on('SIGINT', exitHandler);

// //catches uncaught exceptions
// process.on('uncaughtException', exitHandler);