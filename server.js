var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js')

// Encrypted password requirements
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

// require session
const session = require('express-session');

// Used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());
// Use session
app.use(
    session({
      secret: 'super session secret',
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: 'none',
        httpOnly: true,
        maxAge: 60000 // 60 * 1000 ms === 1 min
      }
    })
  );

// Create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    var {name, email, password} = req.params;

    bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {

        // Else Create user
        dal.create(name, email, hashedPassword)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
    })
    .catch(error => next(error));
    
    
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
app.get('/account/find/:email', function (req, res) {
    var mail = req.params.email;
    
    dal.specific(mail)
        .then((doc) =>{
            console.log(doc);
            res.send(doc)
        })
        
})

// Login Account
app.get('/account/login/:email/:password', function (req, res) {
    
    var mail = req.params.email;
    var pw = req.params.password;
    dal.checkPassword(mail, pw)
        .then((doc) =>{
            bcryptjs.compare(pw, doc, (err, response) => {
                if(response) {
                    res.send([{response: response}]);
                }
                if (!response) {
                    res.send([{response: response}])
                } 
            }); 
        })
})


// Update balance on specific account
app.get('/account/update/:email/:newBalance', function (req, res) {
    var mail = req.params.email;
    var newBalance = req.params.newBalance;
    // dal-function
    dal.update(mail, newBalance)
    console.log(`${newBalance} € added to following account: ${mail}`);
    res.send(`${newBalance} € added to following account: ${mail}`)
})

// Run application
var port = process.env.PORT || 3000;
//var port = 3000;
app.listen(port, () => {
    console.log(`Running on port:${port}`);
});