var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js')

// Used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// Create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // Else Create user
    dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
})

// All Accounts
app.get('/account/all', function(req, res) {
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
        });
})

// Specific Account
app.get('/account/:email', function (req, res) {
    var mail = req.params.email
    // dal-function
    dal.specific(mail)
        .then((doc) =>{
            console.log(doc);
            res.send(doc);
        })
})

// Update balance on specific account
app.get('/account/:email/:newBalance', function (req, res) {
    var mail = req.params.email;
    var newBalance = req.params.newBalance;
    // dal-function
    dal.update(mail, newBalance)
    console.log(`${newBalance} € added to following account: ${mail}`);
    res.send(`${newBalance} € added to following account: ${mail}`)
})

// Run application
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Running on port:${port}`);
});