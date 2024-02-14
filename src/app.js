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
const { decodeSession } = require('./lib/middlewares/middlewares');
const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');

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
app.use('/', decodeSession, indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
