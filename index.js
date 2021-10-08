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
        })
})


// Run application
var PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on port:${PORT}`);
});