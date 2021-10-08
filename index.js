var express = require('express');
var app     = express();
var cors    = require('cors');

// Used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// Create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send({
        name:       req.params.name,
        email:      req.params.email,
        password:   req.params.password
    });
})

// Login user
app.get('/account/login/:email/:password', function(req, res) {
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
})

// Show all accounts
app.get('/account/all', function(req, res) {
    res.send({
        name:       'oezge',
        email:      'sebisteri@outlook.com',
        password:   'secret'
    });
})

var PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on port:${PORT}`);
});