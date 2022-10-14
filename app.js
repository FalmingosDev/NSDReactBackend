var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var countryListRouter = require('./routes/countrylist');
var newouserListRouter = require('./routes/newouserlist');
var loginRouter = require('./routes/login');
var userDataRouter = require('./routes/userdata');
var checkSubscriberRouter = require('./routes/checksubscriber');
var registerRouter = require('./routes/register');
var blogRouter = require('./routes/blog');
var cartificationRouter = require('./routes/cartification');
var userrewardRouter = require('./routes/userreward');
var activaterewardRouter = require('./routes/activatereward');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/newouserlist', newouserListRouter);
app.use('/login', loginRouter);
app.use('/userdata', userDataRouter);
app.use('/register', registerRouter);

app.use('/blogs', blogRouter);
app.use('/blogs/:id', blogRouter);

app.use('/cartification', cartificationRouter);

app.use('/countrylist', countryListRouter);

app.use('/checksubscriber', checkSubscriberRouter);
app.use('/rewardlist', userrewardRouter);

app.use('/activatereward', activaterewardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'test' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;