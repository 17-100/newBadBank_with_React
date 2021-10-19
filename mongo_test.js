const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
//const url = 'mongodb://localhost:27017';
const url = "mongodb+srv://oezge:220991@badbank.a8b6x.mongodb.net/BadBank?retryWrites=true&w=majority";

// Run database + create collection + insert user
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    console.log('Connected!');

    // Set database name
    const dbName = 'BadBank';
    const db = client.db(dbName);

    // New user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@adonize.com';

    // Insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document insert');
    });

    // Some other weird stuff
    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection: ', docs)
            // Clean up
            client.close();
        })


});
