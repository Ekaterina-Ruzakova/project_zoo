require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const path = require('path');

const { PORT } = process.env ?? 3000;

const app = express();

const indexRouter = require('./routes/indexRouter');
const pricePageRouter = require('./routes/pricePageRouter')

const sessionConfig = {
  name: 'Cookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Session',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session(sessionConfig));

/// тут будут app.use
app.use('/', indexRouter);
app.use('/price', pricePageRouter)

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
