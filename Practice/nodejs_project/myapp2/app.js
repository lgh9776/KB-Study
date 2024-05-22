var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//이 부분이 프로그래밍 해야할 부분
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var guestbookRouter = require('./routes/guestbook');

var app = express(); //서버 생성

// view engine setup
//path.join - 폴더 결합
//__dirname: 현재 프로젝트가 작동하는 경호명이 저장된 변수
//C:\WEB-WORKSPACE\node_project\myapp2\views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//모든 url 중에 /guestbook으로 시작하는건 guestbookRouter가 처리
app.use('/guestbook', guestbookRouter);

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
