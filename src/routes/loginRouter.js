const express = require('express');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
require('dotenv').config();

const loginRouter = express.Router();
const { User } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

function generateToken(id, login) {
  return JWT.sign({
    id, login,
  }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

loginRouter.get('/', async (req, res) => {
  renderTemplate(Login, { login: req?.user?.login }, res);
});

loginRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const users = await User.findAll();
    if (!users || !users.length) {
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ login, password: hashPassword });
      const token = generateToken(user.id, user.login);
      req.session.user = { token };
      req.session.save(() => {
        res.json({ msg: 'Вы успешно зарегистрировались' });
      });
    }

    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        const token = generateToken(user.id, user.login);
        req.session.user = { token };
        req.session.save(() => {
          res.json({ msg: 'Вы успешно авторизованы!' });
        });
      } else {
        res.json({ err: 'Введен неверный пароль!' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден!' });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при авторизации' });
  }
});

module.exports = loginRouter;
