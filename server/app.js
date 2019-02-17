const createError = require('http-errors'),
  express = require('express'),
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  dotenv = require('dotenv');

// Custom modules
const apiRouter = require('./routes/api/');


const app = express();
dotenv.config();

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/images/uploads', express.static('uploads'));

// Setup API router
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error
  res.status(err.status || 500).json(err);
});

module.exports = app;
