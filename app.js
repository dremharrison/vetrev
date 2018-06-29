require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var vetRouter = require('./routes/vet');
var petRouter = require('./routes/pet');
var commentRouter = require('./routes/comment');

var app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/vet', vetRouter);
app.use('/api/vet/:vetId/pet', petRouter);
app.use('/api/vet/:vetId/pet/:petID/comments', commentRouter);

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
