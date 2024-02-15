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
  }, process.env.JWT_SECRET, { expiresIn: '24h' }); // возвращает зашифрованную строку(токен)
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
      
      // req.session.login = user.login;
      // req.session.save(() => {
      //   res.json({ msg: 'Вы успешно зарегистрировались' });
      // });
      const token = generateToken(user.id, user.login);
      res.cookie('auth', token, { maxAge: 900000, httpOnly: true }).json({ msg: 'Вы успешно авторизовались' })
    }

    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        // req.session.user = { token };
        // req.session.save(() => {
        //   res.json({ msg: 'Вы успешно авторизованы!' });
        // });
        const token = generateToken(user.id, user.login);
        res.cookie('auth', token, { maxAge: 900000, httpOnly: true }).json({ msg: 'Вы успешно зарегистрировались' })
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
