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
app.get('/account/:email', function (req, res) {
    var mail = req.params.email
    // dal-function
    dal.specific(mail)
        .then((doc) =>{
            console.log(doc);
            res.send(doc);
        })
})

// Login
app.post('account/login/:email/:password', function(req, res, next) {
    // Session
    console.log('SESSION =====> ', req.session)

    // Find user by email
    const {email, pw} = req.params;
    dal.specific(email)
    .then((user) => {
        console.log(`User ${user} exists in database`);
        /* if (bcryptjs.compareSync(pw, user.password)) {
            console.log(`${user.name} logged in!`)
          }
          else {
            console.log("wrong login data")
          }
 */
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