var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var my_emailer = require('./my_emailer')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

drunk_people = []

sober_people = []


phones = []
question = ["Ask The World"]

app.get('/', function(req, res, next) {
    res.render('index', { the_question: question[0], AScore: drunk_people.length,  BScore: sober_people.length });
});

app.get('/yes_page', function(req, res, next) {
    res.render('yes');
});

app.get('/no_page', function(req, res, next) {
    res.render('no');
});

app.post('/yes_page', function(req, res, next) {
    console.log("ya they drunk")
    var lat = req.body.lat;
    var lng = req.body.lng;
    drunk_people.push({'lat': lat, 'lng' : lng});
    res.send({'redirect': '/'});
});

app.post('/no_page', function(req, res, next) {
    console.log("nah they aint drunk")
    var lat = req.body.lat;
    var lng = req.body.lng;
    sober_people.push({'lat': lat, 'lng' : lng});
    res.send({'redirect': '/'});
});


app.post('/phone_number', function(req, res, next) {
    console.log(req.body.phone)
    var phone = req.body.phone;
    phones.push(phone);
    my_emailer(phone, question[0]);
    res.send({'redirect': '/'});
});


app.post('/question_ask', function(req, res, next) {
    console.log(req.body.question)
    q = req.body.question

    // var phone = req.body.phone;
    // phones.push(phone);
    phones.forEach(function (p) {
        my_emailer(p, q);
    });
    question[0] = q
    drunk_people = []
    sober_people = []
    res.send({'redirect': '/'});
});

app.get('/drunk_people', function(req, res, next) {
    console.log("sending drunk people")
    res.send({'ppl': [drunk_people, sober_people]});
});




// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
