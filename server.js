// init project
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const history = require('connect-history-api-fallback');

//initalise express
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config(); //get the secret key from the env file

app.set('SECRET_KEY', process.env.SECRET_KEY); // jwt secret key used for signing/verification

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

const teachers = require('./server/routes/teachers');

app.use('/api/v1/teachers', teachers);

// listen for requests
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;
